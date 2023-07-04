import React from 'react'
import data from '../memesData'
const Meme = () => {

const [memeImage, setMemeImage] = React.useState("")

function getImage() {
  const randomMeme = data.data.memes
  const randomIndex = Math.floor(Math.random() * randomMeme.length)
  const url = randomMeme[randomIndex].url
  setMemeImage(url)
  
}
  return (
    <main>

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

          <button onClick={getImage} className='button'>Get a new meme image  🖼</button>
      </div>
        <img src={memeImage} alt='' className='meme-img' />
    </main>
  )
}

export default Meme
