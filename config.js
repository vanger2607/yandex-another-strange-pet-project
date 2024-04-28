const dotenv = require('dotenv');
dotenv.config({path: "./config.env"});
module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
};

// не решил, что лучше, есть еще такой вариант:
/*
const dotenv = require('dotenv');
const result = dotenv.config();
if (result.error) {
  throw result.error;
}
const { parsed: envs } = result;
console.log(envs);
module.exports = envs;*/
/* если переменных станет слишком много и словарик exports из понятного и читаемого превратиться в ужас,
  воспользуюсь вторым вариантом*/
