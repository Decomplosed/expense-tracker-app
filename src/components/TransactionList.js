import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)

  return (
    <>
      <h3>History</h3>
      <ul id='list' className='list'>
        {transactions.map((transaction) => (
          <li className=''>
            {transaction.amount}
            Cash <span></span>
            <button className='delete-button'>x</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TransactionList
