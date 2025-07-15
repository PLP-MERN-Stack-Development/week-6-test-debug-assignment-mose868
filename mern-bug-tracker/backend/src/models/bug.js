const { Schema, model } = require('mongoose');

const bugSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ['open', 'in-progress', 'resolved'],
    default: 'open',
  },
}, { timestamps: true });

module.exports = model('Bug', bugSchema); 