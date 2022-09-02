const express = require('express');

//* ===== Controllers ======
const {
  getAllRegistration,
  getByIdRegistration,
  createRegistration,
  updateRegistration,
  deleteRegistration,
} = require('../controllers/registrations.controller');

//* ==== Middlewares =======
const {
  registrationExist,
} = require('../middlewares/registrations.middleware');

const registrationRouter = express.Router();

//* ===== EndPoints =======
registrationRouter.get('/', getAllRegistration);

registrationRouter.get('/:id', registrationExist, getByIdRegistration);

registrationRouter.post('/', createRegistration);

registrationRouter.patch('/:id', registrationExist, updateRegistration);

registrationRouter.delete('/:id', registrationExist, deleteRegistration);

module.exports = {
  registrationRouter,
};
