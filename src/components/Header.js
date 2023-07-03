import React from 'react'
import trollFaceImage from '../images/troll-face.png'; 

const Header = () => {
  return (
    <div className='header'>
      <img className='troll-face' src={trollFaceImage} alt='troll-face'/>
      <h2 className='header-title'>Meme Generator</h2>
      <h4 className='header-project'>React Project</h4>
    </div>
  )
}

export default Header
