console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection =[];
console.log('in my collection', myCollection);
const collection =[];
console.log('in collection', collection);

function addToCollection(collection, title, artist, yearPublished) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  };
  collection.push(album);
  return album;
}

let album1 = {
  title: "Keep It Simple",
  artist: "Eli Mattson",
  yearPublished: 2019
};
let album2 = {
  title: "Sigh No More",
  artist: "Mumford & Sons",
  yearPublished: 2009
}
let album3 = {
  title: "It Means Everything",
  artist: "Save Ferris",
  yearPublished: 1997
}
let album4 = {
  title: "Some Nights",
  artist: "Fun",
  yearPublished: 2012
}
let album5 = {
  title: "Hard Candy",
  artist: "Counting Crows",
  yearPublished: 2002
}
let album6 = {
  title: "Invisible Touch",
  artist: "Genesis",
  yearPublished: 1986
}
let album7 = {
  title: "Brand New",
  artist: "Ben Rector",
  yearPublished: 2015
}

addToCollection(myCollection, album1.title, album1.artist, album1.yearPublished);
console.log(myCollection);
addToCollection(myCollection, album2.title, album2.artist, album2.yearPublished);
console.log(myCollection);
addToCollection(myCollection, album3.title, album3.artist, album3.yearPublished);
console.log(myCollection);
addToCollection(myCollection, album4.title, album4.artist, album4.yearPublished);
console.log(myCollection);
addToCollection(myCollection, album5.title, album5.artist, album5.yearPublished);
console.log(myCollection);
addToCollection(myCollection, album6.title, album6.artist, album6.yearPublished);
console.log(myCollection);
addToCollection(myCollection, album7.title, album7.artist, album7.yearPublished);
console.log(myCollection);




//function addToCollection(collection, title, artist, yearPublished) {
//myCollection.push(album1,album2, album3,album4, album5, album6, album7);
//console.log(myCollection);
//}
 
//return the newly created object.
//Use and Test the addToCollection function:
//Add 6 albums to the myCollection array. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)











// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
