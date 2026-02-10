const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: 5001,
    database: 'my-practice-codes', 
});

module.exports = pool;