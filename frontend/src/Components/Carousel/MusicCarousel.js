import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import VideoCard from './VideoCard';
function MusicCarousel() {
  return (
    <div style={{width:'90%',height:'30%',display:'inline-block' }}>
    <Carousel variant="dark" fade style={{ marginTop:"3%", borderRadius:20,}}>
      <Carousel.Item>
        <VideoCard/>
      </Carousel.Item>
      <Carousel.Item>
        <VideoCard/>
      </Carousel.Item>
      <Carousel.Item>
        <VideoCard/>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default MusicCarousel
