const request = require('supertest');
const app = require('../app');

describe('Testing server routes', () => {
  it('should return welcome message for root path', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Welcome to the Restaurant Reservation API!');
  });
});
