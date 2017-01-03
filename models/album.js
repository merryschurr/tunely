var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AlbumsSchema = new Schema({
   	albums: {
     	type: Schema.Types.ObjectId,
     	ref: 'Albums'
   	},
   		artistName: String,
  		name: String,
  		releaseDate: String,
  		genres: String
});

var Albums = mongoose.model('Albums', AlbumsSchema);
 
module.exports = Albums;