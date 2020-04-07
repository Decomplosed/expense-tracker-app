import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const TransactionList = () => {
  return (
    <>
      <h3>History</h3>
      <ul id='list' className='list'></ul>
    </>
  )
}

export default TransactionList
