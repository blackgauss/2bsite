const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Add the auth router
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

// Serve Vue frontend
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// // Correct fallback route
// app.get('/*', (req, res) => {
//  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
// });

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
