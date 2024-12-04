const mongoose = require('mongoose');

const QueueSchema = new mongoose.Schema({
  queue: { type: Number, required: true },
  data: { type: String, required: true },
  graph: { type: String, default: '' },
  minsLeft: { type: Number, default: 100 },
  notificationSent: {type: Boolean, default: false},
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Queue', QueueSchema);