const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

mongoose.connect(
  'mongodb://localhost/passport_local_mongoose_express4',
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

/*
const account = new Schema({
  username: String,
  password: String,
});
account.methods.comparePassword = function (inputPassword, cb) {
  if (inputPassword === this.password) {
    cb(null, true);
  } else {
    cb('error');
  }
};
account.plugin(passportLocalMongoose);

const Account = mongoose.model('accounts', account);

const addAccount = (info, cb) => {
  const newAccount = new Account(info);
  newAccount.save((err, data) => {
    if (err) {
      console.log(err);
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};
module.exports = mongoose.model('accounts', account);
module.exports.addAccount = addAccount;
*/
