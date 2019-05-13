var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var lineupSchema = new Schema({
  name: { type: String }
})

var Post = mongoose.model('Post', lineupSchema);
module.exports = Post 
