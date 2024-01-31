const {Sequelize}=require("sequelize")
require("dotenv").config(); 

const {
    DB_DIALECT,
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    DB_HOST,
    DB_PORT
}=process.env

const dataBase=new Sequelize( 
    `${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    {logging:false}  
)

module.exports={
    dataBase
}