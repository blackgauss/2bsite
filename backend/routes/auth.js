const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret';

const adminUser = {
  username: 'admin',
  passwordHash: bcrypt.hashSync('password123', 10),
};

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (username !== adminUser.username || !await bcrypt.compare(password, adminUser.passwordHash)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;
