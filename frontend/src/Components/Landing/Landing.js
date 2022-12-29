import React from 'react'
import Navbar from '../Navbar/Navbar'
import MusicCarousel from '../Carousel/MusicCarousel'
import Queue from './../MusicQueue/Queue';
import PopularArtist from './../PopularArtist/PopularArtist';
import LatestSong from './../LatestSong/LatestSong';
function Landing() {
    
  return (
    <div style={{paddingBottom:20}}>
        <Navbar/>
        <div style={{display:'flex' ,justifyContent:"space-around" ,flexWrap:'wrap' }}>
            <LatestSong/>
            <Queue/>
        </div>
        <MusicCarousel/>
        <PopularArtist/>
        
    </div>
  )
}

export default Landing