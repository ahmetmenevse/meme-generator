import React from 'react'

const Meme = () => {
  return (
    <div className='form'>
      <input 
        type='text' 
        placeholder='top text' 
        className='form-input'
        />

      <input 
        type='text' 
        placeholder='buttom text' 
        className='form-input'
        />

        <button className='button'>Get a new meme image  🖼</button>

    </div>
  )
}

export default Meme
