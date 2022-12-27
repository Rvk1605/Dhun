import React from 'react'
import Navbar from '../Navbar/Navbar'
import MusicCarousel from '../Carousel/MusicCarousel'
import Queue from './../MusicQueue/Queue';
import PopularArtist from './../PopularArtist/PopularArtist';
function Landing() {
    
  return (
    <div>
        <Navbar/>
        <div style={{display:'flex' ,justifyContent:"space-around"}}>
          <MusicCarousel/>
          <Queue/>
        </div>
        <PopularArtist/>
    </div>
  )
}

export default Landing