var db = require("./models");

/* hard-coded data */
var albumsList = [];
albumsList.push({
              _id: 132,
              artistName: 'Kanye West',
              name: 'The Life of Pablo',
              releaseDate: 'Febraury 14, 2016',
              genres: [ 'rap', 'hip hop' ]
            });
albumsList.push({
              _id: 133,
              artistName: 'Kanye West',
              name: 'Yeezus',
              releaseDate: 'June 18, 2013',
              genres: [ 'hip hop' ]
            });
albumsList.push({
              _id: 134,
              artistName: 'Kanye West',
              name: 'My Beautiful Dark Twisted Fantasy',
              releaseDate: 'November 22, 2010',
              genres: [ 'rap', 'hip hop' ]
            });
albumsList.push({
              _id: 135,
              artistName: 'Kanye West',
              name: '808s & Heartbreak',
              releaseDate: 'November 24, 2008',
              genres: [ 'r&b', 'electropop', 'synthpop' ]
            });


albumList.forEach(function(album) {
  album.songs = sampleSongs;
});


db.Album.remove({}, function(err, albums){

  db.Album.create(albumsList, function(err, albums){
    if (err) { return console.log('ERROR', err); }
    console.log("all albums:", albums);
    console.log("created", albums.length, "albums");
    process.exit();
  });

});
