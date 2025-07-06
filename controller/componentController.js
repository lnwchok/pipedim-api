const db = require('../models/db');

const getComps = async (req, res) => {
    db.all('SELECT * FROM component', (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Error retrieving components', error: error.message });
    } else {
      res.status(200).json(rows);
    }
  });
};

const getCompbyNPS = (req, res) => {
 const { id } = req.params;
  db.get('SELECT * FROM component WHERE id = ?', [id], (err, row) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Error retrieving components', error: error.message });
    } else if (!row) {
      res.status(404).json({ message: 'The NPS not found' });
    } else {
      res.status(200).json(row);
    }
  }); 
}


module.exports = { getComps, getCompbyNPS };
