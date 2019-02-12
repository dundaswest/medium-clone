const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
  title: String,
  text: String,
});
module.exports = mongoose.model('Story', StorySchema);
