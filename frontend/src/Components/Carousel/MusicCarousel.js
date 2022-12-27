import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
function MusicCarousel() {
  return (
    <div style={{width:'60%',height:'10%' }}>
    <Carousel variant="dark" fade style={{marginLeft:'10%' ,marginTop:"3%", borderRadius:20,}}>
      <Carousel.Item>
        <img style={{width:250 ,height:350 ,borderRadius:10,}}
          className="d-block w-100"
          src="https://th.bing.com/th/id/OIP.FT2RU0Ei8vbMWL-jlf_0NwHaEd?pid=ImgDet&rs=1"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:250 ,height:350 ,borderRadius:10}}
          className="d-block w-100"
          src="https://th.bing.com/th/id/OIP.pVwI6G9_SHetICpe-gE-iAHaE-?pid=ImgDet&w=499&h=335&rs=1"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:250 ,height:350 ,borderRadius:10}}
          className="d-block w-100"
          src="https://th.bing.com/th/id/OIP.N_WNkaz1D8xNMydYuqnSvgHaFP?pid=ImgDet&w=1024&h=724&rs=1"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default MusicCarousel
