
import React, {useEffect} from 'react'

const Meme = () => {
const [meme, setMeme] = React.useState({
  topText: "",
  bottomText: "",
  randomImage: "http://i.imgflip.com/1bij.jpg"
})

const [allMemeImages, setAllMemeImages] = React.useState([])

useEffect(() => {
  async function getMemes () {
    const res = await fetch("https://api.imgflip.com/get_memes")
    const data = await res.json()
    setAllMemeImages(data.data.memes)
  }

  getMemes()
}, [])

function getImage() {
  const randomIndex = Math.floor(Math.random() * allMemeImages.length)
  const url = allMemeImages[randomIndex].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
}

function handleChange(event) {
  const{name, value} = event.target
  setMeme(prevMeme => ({
    ...prevMeme,
    [name] : value
  }))
}


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
