const dotenv = require('dotenv').config();

module.exports = {

  environment: process.env.NODE_ENV || 'development',
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'LAVALn18',
  database: process.env.MYSQL_DATABASE || 'videoclub',
  host: process.env.MYSQL_HOST || 'localhost',
  port: process.env.MYSQL_PORT || 3306,
  dialect: process.env.DIALECT || 'mysql'

}

