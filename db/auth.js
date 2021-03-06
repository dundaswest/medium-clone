import mongoose from 'mongoose';

const passportLocalMongoose = require('passport-local-mongoose');

mongoose.connect(
  process.env.MONGOLAB_URI || 'mongodb://localhost/passport_local_mongoose_express4',
  { useNewUrlParser: true },
);

const db = mongoose.connection;
db.once('open', () => console.log('from auth'));

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
