import React from 'react'
import LatestSongCard from './LatestSongCard'


function LatestSong() {
  return (
    <div style={{width:'60%', dislpay:'inline-block',marginTop:'2%' }}>
        <p style={{fontWeight:'bolder' , color:'white' , fontSize:25 ,marginBottom:'3%' }}>Latest Release</p>
        <div style={{display:'flex' , justifyContent:'space-around' ,flexWrap:'wrap' }}>
            <LatestSongCard/>
            <LatestSongCard/>
            <LatestSongCard/>
            <LatestSongCard/>
            <LatestSongCard/>
            <LatestSongCard/>
            <LatestSongCard/>
            <LatestSongCard/>
            <LatestSongCard/>
            <LatestSongCard/>
            <LatestSongCard/>
            <LatestSongCard/>
        </div>
    </div>
  )
}

export default LatestSong