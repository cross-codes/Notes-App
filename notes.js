const fs = require("fs");
const chalk = require("chalk");

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const listNotes = () => {
  const notes = loadNotes();
  notes.forEach(element => {
    console.log(element.title);
  });
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.bgGreen("New note added!"));
  } else {
    console.log(chalk.bgRed("Duplicate note found"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const removeNote = (title) => {
  const notes = loadNotes();

  const exist = notes.filter((note) => note.title !== title);

  if (notes.length - exist.length > 0) {
    saveNotes(exist);
    console.log(chalk.bgGreen("Note removed"));
  } else {
    console.log(chalk.bgRed("No matching note found"));
  }
};

const readNotes = (title) => {
  const notes = loadNotes();
  const find = notes.find((note) => note.title === title);

  if (!find) {
    console.log(chalk.bgRed("No note found with given title"));
  } else {
    console.log("         " + chalk.underline(find.title));
    console.log(find.body);
  }
};

module.exports = {
  listNotes: listNotes,
  addNote: addNote,
  removeNote: removeNote,
  readNotes: readNotes,
};
