const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'Please add some text'],
  },
  amount: {
    type: Number,
    required: [true, 'Please add a postivie or negative number']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})
