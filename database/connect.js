const mongoose = require('mongoose');

const CONFIG = require("./config")



async function connectToDatabase() {
  try {
    await mongoose.connect(CONFIG.DB_URL);
    console.log('Успешно подключились к MongoDB')
  }
  catch (err) {
    console.log('При подключении MongoDB возникла ошибка')
    console.error(err);
  }
}

module.exports = connectToDatabase; 
