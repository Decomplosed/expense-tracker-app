// @desc    GET all transactions
// @route   GET /api/v1/transactions
// @access  PUBLIC
exports.getTransactions = (req, res, next) => {
  res.send('GET transactions')
}

// @desc    Add a transaction
// @route   POST /api/v1/transactions
// @access  PUBLIC
exports.addTransaction = (req, res, next) => {
  res.send('POST transaction')
}

// @desc    Delete a transaction
// @route   DELETE /api/v1/transactions/:id
// @access  PUBLIC
exports.deleteTransaction = (req, res, next) => {
  res.send('GET transactions')
}
