const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});