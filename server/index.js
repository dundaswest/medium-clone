const express = require('express');
const pg = require('pg');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const bodyParser = require('body-parser');

const router = express.Router();
const app = express();
const connectionString = 'postgres://jo-eunbyeol:@localhost:5432/medium';
const Local = require('passport-local');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
// const parseDbUrl = require('parse-database-url');
const pool = new pg.Pool({
  user: 'jo-eunbyeol',
  host: 'localhost',
  database: 'medium',
  port: '5432',
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(passport.initialize());
app.use(passport.session());
app.use(
  require('express-session')({
    secret: 'monkeyBanana',
    resave: false,
    saveUninitialized: false,
  }),
);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

router.get('/sp', (req, res, next) => {
  pg.connect(
    connectionString,
    (err, client, done) => {
      if (err) {
        console.log(`not able to get connection ${err}`);
        res.status(400).send(err);
      }
      client.query('SELECT * from LOGINS ', (err, result) => {
        done(); // closing the connection;
        if (err) {
          console.log(err);
          res.status(400).send(err);
        }
        res.status(200).send(result.rows);
      });
    },
  );
});

app.get('/', (req, res) => {
  /*
  pool.query('SELECT * FROM LOGINS WHERE id  = 1', (err, queryRes) => {
    if (err) {
      res.sendStatus(500);
    } else {
      console.log(err, res);
      res.status(200).send(queryRes.rows[0]);
    }
  });
  */
  pg.connect(
    connectionString,
    (err, client, done) => {
      if (err) {
        console.log(`not able to get connection ${err}`);
        res.status(400).send(err);
      }
      client.query('SELECT * FROM medium where id = $1', [1], (err, result) => {
        done(); // closing the connection;
        if (err) {
          console.log(err);
          res.status(400).send(err);
        }
        console.log(esult.rows);
        res.status(200).send(result.rows);
      });
    },
  );
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
