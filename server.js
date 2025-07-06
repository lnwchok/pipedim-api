const express = require('express');
// const cors = require('cors');

const compRoutes = require('./routes/components');

const app = express();
const port = 3001;

// Middleware for parsing JSON
app.use(express.json());
// app.use(cors);
app.use('/api/components', compRoutes);

app.listen(port, () => {
  console.log(`REST API server running on port ${port}`);
});
