import React from 'react'
import { styled } from '@mui/joy/styles';
import Grid from '@mui/joy/Grid';
import Sheet from '@mui/joy/Sheet';
import PopularArtistMusicCard from './PopularArtistMusicCard'

const Item = styled(Sheet)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.vars.palette.text.tertiary,
}));

function PopularArtist() {
  return (
    <div style={{width:'90%',margin:'auto' }}>
        <p style={{fontWeight:'bolder' , color:'white' , fontSize:20 , }}>Popular Artists</p>
        <div style={{display:'flex' , justifyContent:'space-evenly' }}>
            <PopularArtistMusicCard/>
            <PopularArtistMusicCard/>
            <PopularArtistMusicCard/>
            <PopularArtistMusicCard/>
        </div>
    </div>
  )
}

export default PopularArtist