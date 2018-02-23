var library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  },
  printPlaylists: function () {

    for (var print in this.playlists)
      console.log(`${print}: ${this.playlists[print]['name']} - ${this.playlists[print]['tracks'].length} tracks`);
  },

  printTracks: function () {
    for (var print in this['tracks'])
      console.log(`${print}: ${this['tracks'][print]['name']} by ${this['tracks'][print]['artist']} (${this['tracks'][print]['album']})`);
  },
  printPlaylist: function (playlistId) {
    console.log(`${playlistId}: ${this['playlists'][playlistId]['name']} - ${this['playlists'][playlistId]['tracks'].length} tracks`);

    for (var print of this['playlists'][playlistId]['tracks']) {
      console.log(`${print}: ${this['tracks'][print]['name']} by ${this['tracks'][print]['artist']} (${this['tracks'][print]['album']})`);
    }

  },
  addTrackToPlaylist: function (trackId, playlistId) {
    if (this['tracks'][trackId]) {
      var exist = 0
      for (ii of this['playlists'][playlistId]['tracks']) {
        if (ii !== trackId) {
          exist += 1
          if (exist == this['playlists'][playlistId]['tracks'].length) {
            this['playlists'][playlistId]['tracks'].push(trackId);
            console.log(this['playlists'][playlistId]['tracks']);
          }
        } else {


          break;
        }
      }
    }
  },
  addTrack: function (name, artist, album) {
    var newId = this.uid()
    this.tracks[newId] = {
      'id': newId,
      'name': name,
      'artist': artist,
      'album': album
    }
    console.log(this.tracks[newId]);

  },
  addPlaylist: function (name) {
    var newIdPlayList = this.uid()
    this.playlists[newIdPlayList] = {
      'id': newIdPlayList,
      'name': name,
      'tracks': []
    }
    console.log(this.playlists[newIdPlayList]);
  },
  printSearchResults: function (query) {
    var query = query.toLowerCase();
    for (i in this.tracks) {
      if (this.tracks[i]['name'].toLowerCase().search(query) != -1 ||
        this.tracks[i]['artist'].toLowerCase().search(query) != -1 ||
        this.tracks[i]['album'].toLowerCase().search(query) != -1) {
        console.log(this.tracks[i]);
      }
    }
  },
  uid: function () {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
}

// FUNCTIONS TO IMPLEMENT:

library.printPlaylists(); // EXECUTE THE FUNCTION HERE

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks


library.printTracks() // EXECUTE THE FUNCTION HERE

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)


library.printPlaylist('p01') // EXECUTE THE FUNCTION HERE

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)


library.addTrackToPlaylist('t01', 'p02'); // EXECUTE THE FUNCTION HERE

// adds an existing track to an existing playlist


// console.log(uid())

// generates a unique id
// (use this for addTrack and addPlaylist)



library.addTrack('choup suey', 'system', 'toxicity'); // EXECUTE THE FUNCTION HERE
// console.log(library.tracks)

// adds a track to the library


library.addPlaylist('toxicity'); // EXECUTE THE FUNCTION HERE
// adds a playlist to the library


// STRETCH:
library.printSearchResults('cod'); // EXECUTE THE FUNCTION HERE

// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
