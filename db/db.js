const { Pool, Client } = require('pg');

// pools will use environment variables
// for connection information
const pool = new Pool({
  user: 'jo-eunbyeol',
  host: 'localhost',
  database: 'medium',
  port: 5432,
});

pool.connect((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected');
  }
});
const select = () => {
  pool.query('SELECT * FROM logins', (err, res) => {
    if (err) {
      console.log(err);
    } else {
      alert('hi');
      console.log(res.rows[0]);
    }
  });
};
module.exports = {
  select,
};
