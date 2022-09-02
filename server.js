const { app } = require('./app');
const { db } = require('./utils/database.util');

const startServer = async () => {
  try {
    await db.authenticate();
    await db.sync();

    const PORT = 4000;

    app.listen(PORT, () => {
      console.log('express app running!');
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
