import React from 'react'
import memesData from '../memesData'
const Meme = () => {

// const [memeImage, setMemeImage] = React.useState("")

const [meme, setMeme] = React.useState({
  topText: "",
  bottomText: "",
  randomImage: "http://i.imgflip.com/1bij.jpg"
})

const [allMemeImages, setAllMemeImages] = React.useState(memesData)

function getImage() {
  const randomMeme = allMemeImages.data.memes
  const randomIndex = Math.floor(Math.random() * randomMeme.length)
  const url = randomMeme[randomIndex].url

  setMeme(prevMeme => ({
    ...prevMeme,
    randomImage: url
  }))
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
        <img src={meme.randomImage} alt='' className='meme-img' />
    </main>
  )
}

export default Meme
