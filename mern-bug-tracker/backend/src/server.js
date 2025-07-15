require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const bugRoutes = require('./routes/bugs');
const { notFound, errorHandler } = require('./middleware/errorHandler');

const app = express();
app.use(express.json());

app.use('/api/bugs', bugRoutes);

// 404 handler
app.use(notFound);
// central error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/bugtracker';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  });

module.exports = app; 