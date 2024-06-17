const { Reservation } = require('../models');

exports.getAllReservations = async (req, res) => {
  const reservations = await Reservation.findAll();
  res.json(reservations);
};

exports.createReservation = async (req, res) => {
  const reservation = await Reservation.create(req.body);
  res.status(201).json(reservation);
};

exports.getReservationById = async (req, res) => {
  const reservation = await Reservation.findByPk(req.params.id);
  if (reservation) {
    res.json(reservation);
  } else {
    res.status(404).json({ error: 'Reservation not found' });
  }
};

exports.deleteReservation = async (req, res) => {
  const result = await Reservation.destroy({
    where: {
      id: req.params.id
    }
  });
  res.status(204).end();
};
