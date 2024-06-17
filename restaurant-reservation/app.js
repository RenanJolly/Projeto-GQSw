const express = require('express');
const reservationRoutes = require('./routes/reservationRoutes');
const sequelize = require('./config/database');

const app = express();
const port = 3000;

app.use(express.json());

// Rota padrão para a raiz do servidor
app.get('/', (req, res) => {
  res.send('Welcome to the Restaurant Reservation API!');
});

// Rotas para as reservas
app.use('/reservations', reservationRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  sequelize.authenticate().then(() => {
    console.log('Connected to the database.');
  }).catch(err => {
    console.error('Unable to connect to the database:', err);
  });
});

module.exports = app;
