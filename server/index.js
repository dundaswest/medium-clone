const express = require('express');

const cors = require('cors');
const path = require('path');
const passport = require('passport');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const router = express.Router();
const app = express();
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectID;
const User = require('../db/auth');
const Story = require('../db/story');

mongoose
  .connect(process.env.MONGOLAB_URI || 'mongodb://localhost/passport_local_mongoose_express4', {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Connected to Database');
  })
  .catch((err) => {
    console.log('Not Connected to Database ERROR! ', err);
  });

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

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
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
app.get('/getStory', (req, res) => {
  const { title } = req.query;
  db.collection('story')
    .find({ title })
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
      res.send('loggedIn');
    });
  });
});

app.post('/addStory', (req, res) => {
  const StoryInstance = new Story({
    title: req.body.title,
    text: req.body.text,
  });
  db.collection('story').insertOne(StoryInstance);
  res.send('saved');
});

app.put('/:id', (req, res) => {
  const { title, text, id } = req.body;
  const newData = { title, text };
  db.collection('story').updateOne({ _id: ObjectId(id) }, { $set: newData }, (err, data) => {
    if (err) {
      res.send(err);
    }
    res.send('UPDATED');
  });
});

app.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.collection('story').findOneAndDelete({ _id: ObjectId(id) }, (err, data) => {
    if (err) {
      res.send(err);
    }
    res.send('DELETED');
  });
});

app.post('/login', passport.authenticate('local'), (req, res) => {
  res.send('loggedIn');
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});
app.listen(port, () => console.log(`app listening on port ${port}`));
