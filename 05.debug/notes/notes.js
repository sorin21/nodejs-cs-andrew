const fs = require('fs');
const chalk = require('chalk');

// const getNotes = () => {
//   const fs = require('fs');
//   // takes 2 arguments, both strings
//   // file name and data to write
//   // fs.writeFileSync('notes.txt', `My name is Sorin.`)
//   fs.appendFileSync('notes.txt', ' This is a second sytstem erorr.');
// }


const getNotes = () => {
  return 'Your notes...'
}

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter(note => {
    return note.title === title;
  })

  debugger;

  if (duplicateNotes.length === 0) {
    // we push each note as an object
    notes.push({
      title,
      body
    })
    saveNotes(notes);
    console.log('New note added!')
  } else {
    console.log('Note title taken');
  }
}

const removeNote = (title) => {
  const notes = loadNotes();

  const notesToKeep = notes.filter(note => {
    return note.title !== title;
  })

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse('Note removed!'))
    saveNotes(notesToKeep)
  } else {
    console.log(chalk.red.inverse('No note found!'))
  }
}

const readNote = (title) => {
  const notes = loadNotes()
  const note = notes.find((note) => note.title === title)

  if (note) {
    console.log(chalk.inverse(note.title))
    console.log(note.body)
  } else {
    console.log(chalk.red.inverse('Note not found!'))
  }
}

const listNotes = () => {
  const notes = loadNotes()

  console.log(chalk.inverse('Your notes'))

  notes.forEach((note) => {
    console.log(note.title)
  })
}

// argument notes is the array
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
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

module.exports = { getNotes, addNote, removeNote, readNote, listNotes }