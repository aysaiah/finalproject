var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gameSchema = new Schema({
  gameDate: { type: String },
  gameTime: { type: String },
  opponentTeam: { type: String },
  location: { type: String },
  riordanScore: { type: Number, default: 0 },
  opponentScore: { type: Number, default: 0 },
})

var Post = mongoose.model('Post', gameSchema);
module.exports = Post
