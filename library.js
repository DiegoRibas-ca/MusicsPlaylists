function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playLists = [];
}

function PlayList(name) {
  this.name = name;
  this.tracks = [];
}

function Tracks (title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

Library.prototype.addPlaylistToLib = function (playlist) {
  this.playLists.push(playlist) ;
};

PlayList.prototype.addTrackToPlayList = function (track) {
  this.tracks.push(track) ;
};
//overallRating averaging rate tracks to the playlist
PlayList.prototype.overallRating = function () {
  let ratingOverall = 0
  let countTracks = 0
  if (this.tracks[0]) {
    for (const eachTrack of this.tracks) {
      ratingOverall += eachTrack.rating;
      countTracks += 1
    }
    return ( ratingOverall / countTracks )
  } else {
    console.log('No tracks found');
    return 0
  }
};
//total duration of tracks to the playlist
PlayList.prototype.totalDuration = function () {
  let sumDuration = 0
  if (this.tracks[0]) {
    for (const eachTrack of this.tracks) {
      sumDuration += eachTrack.length;
    }
    return sumDuration
  } else {
    console.log('No tracks found');
    return 0
  }
};


const test = new Library('library1', 'Tim');
const playlistTest = new PlayList('Playlist1');
const t01 = new Tracks('t01', 5, 180);
const t02 = new Tracks('t02', 3, 200);
const t03 = new Tracks('t03', 2, 300);


test.addPlaylistToLib(playlistTest)
playlistTest.addTrackToPlayList(t01)
playlistTest.addTrackToPlayList(t02)
playlistTest.addTrackToPlayList(t03)

console.log(playlistTest)
console.log(playlistTest.totalDuration())
console.log(playlistTest.overallRating())


