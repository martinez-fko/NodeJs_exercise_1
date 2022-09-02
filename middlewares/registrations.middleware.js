const { Registration } = require('../models/registrations.model');

const registrationExist = async (req, res, next) => {
  try {
    const { id } = req.params;
    const registration = await Registration.findOne({ where: { id } });

    if (!registration) {
      return res.status(404).json({
        status: 'Error',
        message: 'Registration not found',
      });
    }
    req.registration = registration;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  registrationExist,
};
