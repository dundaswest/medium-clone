const express = require('express');
const pg = require('pg');
const cors = require('cors');
const path = require('path');

const app = express();
const session = require('express-session');

app.use(cors());
app.use(express.static('public'));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;

const pool = new pg.Pool({
  user: 'jo-eunbyeol',
  host: 'localhost',
  database: 'medium',
  port: '5432',
});

// get author info
app.get('/user/:id', (req, res) => {
  pool.query('SELECT * FROM AUTHORS WHERE id  = 1', (err, queryRes) => {
    if (err) {
      res.sendStatus(500);
    } else {
      console.log(err, res);
      res.status(200).send(queryRes.rows[0]);
    }
  });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
