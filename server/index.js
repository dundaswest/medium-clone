const express = require('express');

const cors = require('cors');
const path = require('path');
const passport = require('passport');
const bodyParser = require('body-parser');

const router = express.Router();
const app = express();
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

const User = require('../db/auth');
const Story = require('../db/story');

mongoose.connect(
  'mongodb://localhost/passport_local_mongoose_express4',
  { useNewUrlParser: true },
);
const db = mongoose.connection;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(session({ secret: 'secret', resave: true, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.get('/getList', (req, res) => {
  console.log('getting list');

  db.collection('story')
    .find()
    .toArray((err, list) => {
      if (err) {
        console.log(err);
      } else {
        res.send(list);
      }
    });
});

app.get('/logout', (req, res) => {
  req.logout();
  console.log('logged out!');
  res.redirect('/');
});
app.post('/signUp', (req, res) => {
  console.log('body', req.body);

  User.register(new User({ username: req.body.username }), req.body.password, (err, user) => {
    if (err) {
      console.log(err);
    }
    passport.authenticate('local', { failurmongeRedirect: '/FourOhFour' })(req, res, () => {
      console.log('loggedIn');
      res.send('haha');
    });
  });
});

app.post('/addStory', (req, res) => {
  const StoryInstance = new Story({ title: req.body.title, text: req.body.text });
  db.collection('story').insertOne(StoryInstance);
  res.send('saved');
});

app.post('/login', passport.authenticate('local'), (req, res) => {
  res.send('loggedIn');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
