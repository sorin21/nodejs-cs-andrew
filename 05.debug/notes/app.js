const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes.js');
// argument vector. an array with all arguments provided
// console.log(process.argv[2])
// const command = process.argv[2];

// if(command === 'add') {
//   console.log('Adding note')
// } else if (command === 'remove') {
//   console.log('Removing note')
// }

// customize yeargs version(youur app version)
yargs.version('1.0.1')

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title ',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    // console.log(`Title: ${argv.title}`);
    // console.log(`Body: ${argv.body}`);
    notes.addNote(argv.title, argv.body)
  }
})

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title '
    }
  },
  handler(argv) {
    notes.removeNote(argv.title)
  }
})

yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler(argv) {
    notes.readNote(argv.title);
  }
})

yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler() {
    notes.listNotes();
  }
})

// console.log(yargs.argv)

// instead of console yargs.argv
yargs.parse();