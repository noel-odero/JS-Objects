// Write a JavaScript program to sort an array of JavaScript objects.


function sortedAndOrderedArray (arr) {
    arr.sort((a,b) => b.libraryID - a.libraryID)

    let orderedLibrary = arr.map(number => ({
        author: number.author,
        libraryID: number.libraryID,
        title: number.title
    }))
  return orderedLibrary
}




// Sample Object :
let library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];

console.log(sortedAndOrderedArray(library))