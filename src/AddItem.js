import React from 'react'
import {FaPlus} from 'react-icons/fa';

const AddItem = () => {
  return (
    <form className='addForm'>
        <label htmlFor='addItem'>Add new item</label>
        <input
            autoFocus
            id='addItem'
            type='text'
            placeholder='Add new item'
            required        
        />
        <button
            type='submit'
            aria-label='Add item'
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default AddItem