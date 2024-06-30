console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection =[];
console.log('in my collection', myCollection);
const collection =[];
console.log('in collection', collection);


function addToCollection(collection, title, artist, yearPublished) {

}


//   function collection (title, artist, yearPublished){
//   Const album = { 
//   let album.title = "title";
//   let album.artist = "artist;,
//   let album.yearPublished = 'yearPublished'}
//   }
//     console.log(myCollection, title, artist, yearPublished, collection);

// }









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
