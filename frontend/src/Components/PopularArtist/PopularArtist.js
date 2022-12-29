import React from 'react'
import PopularArtistMusicCard from './PopularArtistMusicCard'


function PopularArtist() {
  return (
    <div style={{width:'93%',margin:'auto', dislpay:'inline-block',marginTop:'2%' }}>
        <p style={{fontWeight:'bolder' , color:'white' , fontSize:25 ,marginBottom:'3%' }}>Popular Artists</p>
        <div style={{display:'flex' , justifyContent:'space-around' ,flexWrap:'wrap' }}>
            <PopularArtistMusicCard/>
            <PopularArtistMusicCard/>
            <PopularArtistMusicCard/>
            <PopularArtistMusicCard/>
            <PopularArtistMusicCard/>
        </div>
    </div>
  )
}

export default PopularArtist