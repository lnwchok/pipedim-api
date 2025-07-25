const db = require('../models/db');

// curl http://localhost:3001/api/components/
const getComps = async (req, res) => {
    db.all('SELECT * FROM pipes', (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Error retrieving components', error: error.message });
    } else {
      res.status(200).json({ nps : 'All', data : rows});
    }
  });
};

// curl http://localhost:3001/api/components/1_1_2
const getCompbyNPS = (req, res) => {
 const { nps } = req.params;
  db.get('SELECT * FROM pipes WHERE nps = ?', [nps], (err, row) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Error retrieving components', error: error.message });
    } else if (!row) {
      res.status(404).json({ message: 'The NPS not found' });
    } else {
      res.status(200).json(data = { nps : row.nps, data : row});
    }
  }); 
}


module.exports = { getComps, getCompbyNPS };
