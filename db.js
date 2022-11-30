const { config } = require('dotenv');
const {Sequelize, DataTypes} = require('sequelize');
const dotenv = require('dotenv').config();

const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE|| 'videoclub', 
    process.env.MYSQL_USER || 'root', 
    process.env.MYSQL_PASSWORD || 'qTJIzZDkoltceEfh7vVB',
    {
        host: process.env.MYSQL_HOST || 'containers-us-west-105.railway.app1',
        port: process.env.MYSQL_PORT || '3306',
        dialect: 'mysql',
        operatorAliases: false,
        pool: {
            max: 5,  
            min: 0, 
            acquire: 30000, 
            idle: 10000 
        },
    }
);

module.exports = sequelize.authenticate()
.then((db)=>{
    console.log('MYSQL connected'); 
    return db;
});