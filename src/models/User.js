const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  telegramId: {
    type: Number,
    required: true,
    unique: true,
  },
  queue: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    default: '',
  },
  lastName: {
    type: String,
    default: '',
  },
  nickName: {
    type: String,
    default: '',
  },
  active: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;