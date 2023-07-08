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

function handleChange(event) {
  const{name, value, type} = event.target
  setMeme(prevMeme => ({
    ...prevMeme,
    [name] : value
  }))
}

console.log(meme)
  return (
    <main>
      <div className='form'>
        <input 
          type='text' 
          placeholder='top text' 
          className='form-input'
          onChange={handleChange}
          value={meme.topText}
          name="topText"
          />

        <input 
          type='text' 
          placeholder='buttom text' 
          className='form-input'
          onChange={handleChange}
          value={meme.bottomText}
          name="bottomText"
          />

          <button 
            onClick={getImage} 
            className='button'>
              Get a new meme image  🖼
          </button>
      </div>

      <div className='meme'>  
        <img src={meme.randomImage} alt='' className='meme-img' />
        <h2 className='meme-text top'>{meme.topText}</h2>
        <h2 className='meme-text bottom'>{meme.bottomText}</h2>
      </div>
    </main>
  )
}

export default Meme
