import React from 'react'

const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? '-' : '+'

  return (
    <li className=''>
      {transaction.text}
      Cash <span>{transaction.amount}</span>
      <button className='delete-button'>x</button>
    </li>
  )
}

export default Transaction
