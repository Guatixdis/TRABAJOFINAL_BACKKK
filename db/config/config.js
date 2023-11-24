const dotenv =require( "dotenv" );
dotenv.config();

module.exports = 
{
  "development" : {
    "username" : process.env.DB_USER,
    "password" : process.env.DB_PASS,
    "database" : process.env.DB_NAME,
    "host" : process.env.DB_HOST,
    "dialect" : "postgres",
    "dialectOptions" : {
      "useUTC" : "false", // Intenta ajustar la zona horaria UTC
      "timezone" : "America/Bogota", // Especifica la zona horaria deseada
    },

  },
  "test": {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres"
  },
  "production": {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres"
  }
}
