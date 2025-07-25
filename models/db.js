const sqlite3 = require('sqlite3').verbose();
// const path = require('path');
// const db = new sqlite(path.resolve('components.db'), {fileMustExist: true});

const db = new sqlite3.Database('./db/components.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database...');
});


module.exports = db;

