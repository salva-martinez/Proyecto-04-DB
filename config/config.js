const dotenv = require('dotenv').config();

module.exports = {

  environment: process.env.NODE_ENV || 'development',
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'qTJIzZDkoltceEfh7vVB',
  database: process.env.MYSQL_DATABASE || 'railway',
  host: process.env.MYSQL_HOST || 'containers-us-west-105.railway.app',
  port: process.env.MYSQL_PORT || 7222,
  dialect: process.env.DIALECT || 'mysql'

}

