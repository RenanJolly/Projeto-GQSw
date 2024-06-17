const request = require('supertest');
const app = require('../app');
const { Reservation } = require('../models');

beforeAll(async () => {
  await Reservation.sync({ force: true });
});

describe('Reservation API', () => {
  it('should create a new reservation', async () => {
    const res = await request(app)
      .post('/reservations')
      .send({
        name: 'Tiago Silva',
        date: '2024-04-23',
        guests: 4
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  it('should get all reservations', async () => {
    const res = await request(app).get('/reservations');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should get a reservation by ID', async () => {
    const reservation = await Reservation.create({
      name: 'Miranda Noronha',
      date: '2024-05-13',
      guests: 2
    });
    const res = await request(app).get(`/reservations/${reservation.id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', reservation.id);
  });

  it('should delete a reservation', async () => {
    const reservation = await Reservation.create({
      name: 'Fernando Silva',
      date: '2024-06-18',
      guests: 3
    });
    const res = await request(app).delete(`/reservations/${reservation.id}`);
    expect(res.statusCode).toEqual(204);
  });
});
