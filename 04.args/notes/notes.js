const fs = require('fs');

// const getNotes = () => {
//   const fs = require('fs');
//   // takes 2 arguments, both strings
//   // file name and data to write
//   // fs.writeFileSync('notes.txt', `My name is Sorin.`)
//   fs.appendFileSync('notes.txt', ' This is a second sytstem erorr.');
// }


const getNotes = function () {
  return 'Your notes...'
}

const addNote = function (title, body) {
  const notes = loadNotes();
  console.log(notes)
}

const loadNotes = function () {
  // we use try catch block to not fail te loadNotes function
  // because 1st time when we load it notes.json does not exist
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return []
  }

}

module.exports = { getNotes, addNote }