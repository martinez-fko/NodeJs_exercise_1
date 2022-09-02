const express = require('express');

//* ==== Routes ======
const { registrationRouter } = require('./routes/registrations.router');

//* ===== Init our Express app =====
const app = express();

//* ==== Enable Express app to receiv JSON data =====
app.use(express.json());

//? ==== Define EndPoints ========
app.use('/api/v1/registration/', registrationRouter);

//! ===== EndPoints don't exists ====
app.all('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: `${req.method} ${req.url} this don't exists`,
  });
});

module.exports = {
  app,
};
