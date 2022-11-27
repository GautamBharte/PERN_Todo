const Pool = require('pg').Pool;
require('dotenv').config;

console.log(process.env)

const pool = new Pool({
    user : 'postgres',
    password : 'Gautam@0142',
    host : 'localhost',
    database : 'pernstack',
    port : 5432
});
module.exports = pool;