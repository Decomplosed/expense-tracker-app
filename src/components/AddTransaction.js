import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  const { addTransaction } = useContext(GlobalContext)

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit} id='form'>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            id='text'
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            id='amount'
            placeholder='Enter amount...'
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
