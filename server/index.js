const express = require('express');
const pg = require('pg');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const bodyParser = require('body-parser');
const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;

const router = express.Router();
const app = express();
const connectionString = 'postgres://jo-eunbyeol:@localhost:5432/medium';
const Local = require('passport-local');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../db');
// const parseDbUrl = require('parse-database-url');
const pool = new pg.Pool({
  user: 'jo-eunbyeol',
  host: 'localhost',
  database: 'medium',
  port: '5432',
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
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

passport.use(
  new LocalStrategy((username, password, cb) => {
    db.users.findByUsername(username, (err, user) => {
      if (err) {
        return cb(err);
      }
      if (!user) {
        return cb(null, false);
      }
      if (user.password != password) {
        return cb(null, false);
      }
      return cb(null, user);
    });
  }),
);
passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
  db.users.findById(id, (err, user) => {
    if (err) {
      return cb(err);
    }
    cb(null, user);
  });
});
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), (req, res) => {
  res.redirect('/');
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
