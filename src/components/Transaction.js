import React from 'react'

const Transaction = () => {
  return (
    <li className=''>
      {transaction.text}
      Cash <span>{transaction.amount}</span>
      <button className='delete-button'>x</button>
    </li>
  )
}

export default Transaction
