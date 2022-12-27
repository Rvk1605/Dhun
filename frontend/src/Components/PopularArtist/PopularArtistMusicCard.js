import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import Chip from '@mui/joy/Chip';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import Favorite from '@mui/icons-material/Favorite';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function PopularArtistMusicCard() {
  return (
    <Card
      sx={{
        width: 250,
        bgcolor: 'white',
        boxShadow: 'none',
        '--Card-padding': '0px',
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <AspectRatio ratio="4/3">
          <figure>
            <img
              src="https://th.bing.com/th/id/OIP.EzVp_g95HbkRe98atZ-KbgHaEK?pid=ImgDet&rs=1"
              srcSet="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?auto=format&fit=crop&w=300&dpr=2 2x"
              loading="lazy"
              alt="Yosemite by Casey Horner"
            />
          </figure>
        </AspectRatio>
        <CardCover
          className="gradient-cover"
          sx={{
            '&:hover, &:focus-within': {
              opacity: 1,
            },
            opacity: 0,
            transition: '0.1s ease-in',
            background:
              'linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)',
          }}
        >
          {/* The first box acts as a container that inherits style from the CardCover */}
          <Box>
            <Box style={{margin:'auto'}}
              sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                flexGrow: 0,
                alignSelf: 'flex-end',
              }}
            >
                <IconButton aria-label="play/pause" style={{border:'2px solid white' , height:80 ,width:80 ,margin:'auto' ,borderRadius:100}}>
                    <PlayArrowIcon sx={{ height: 60 ,width: 60 ,color:'white'}} />
                </IconButton>
            </Box>
          </Box>
        </CardCover>
      </Box>
      <Box style={{justifyContent:'space-evenly' ,width:'90%' }} sx={{ display: 'flex', gap: 1, mt: 1.5 ,mx:0.7 }}>
        
        <Typography sx={{ fontSize: 'sm', fontWeight: 'md' }}>
          Arijit Singh
        </Typography>
        <Chip
          variant="outlined"
          color="neutral"
          size="sm"
          sx={{
            borderRadius: 'sm',
            py: 0.25,
            px: 0.5,
          }}
        >
          Featured
        </Chip>
        <Link
          href="#dribbble-shot"
          level="body3"
          underline="none"
          startDecorator={<Favorite />}
          sx={{
            fontWeight: 'md',
            ml: 'auto',
            color: 'text.secondary',
            '&:hover': { color: 'danger.plainColor' },
          }}
        >
          117
        </Link>
      </Box>
    </Card>
  );
}