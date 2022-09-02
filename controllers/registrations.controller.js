const { Registration } = require('../models/registrations.model');

//*===== Get All Registrations =======
const getAllRegistration = async (req, res) => {
  try {
    const registrations = await Registration.findAll();

    res.status(200).json({
      status: 'success',
      data: {
        registrations,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

//* ===== Get Registration by ID ===========
const getByIdRegistration = async (req, res) => {
  try {
    const { registration } = req;

    res.status(200).json({
      status: 'success',
      data: {
        registration,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

//* ====== Create Registration  ( Check-in | default: working ) =======
const createRegistration = async (req, res) => {
  try {
    const { entranceTime } = req.body;

    const newRegistration = await Registration.create({
      entranceTime,
    });

    res.status(201).json({
      message: 'success',
      newRegistration,
    });
  } catch (error) {
    console.log(error);
  }
};

//* ====== Update Registration ( Check-out | out )======
const updateRegistration = async (req, res) => {
  try {
    const { exitTime, status } = req.body;
    const { registration } = req;

    await registration.update({ exitTime, status });
    res.status(200).json({
      status: 'success',
      registration,
    });
  } catch (error) {
    console.log(error);
  }
};

//* ==== Delete REgistration ( Cancelled ) ======
const deleteRegistration = async (req, res) => {
  try {
    const { status } = req.body;
    const { registration } = req;

    await registration.update({ status });
    res.status(200).json({
      status: 'success',
      registration,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllRegistration,
  getByIdRegistration,
  createRegistration,
  updateRegistration,
  deleteRegistration,
};
