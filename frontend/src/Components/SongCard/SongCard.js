import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import IconButton from '@mui/material/IconButton';
import RecommendIcon from '@mui/icons-material/Recommend';
export default function SongCard() {
  return (
    <Card
      variant="outlined"
      row
      sx={{
        width: 320,
        backgroundColor:'black',
        gap: 2,
        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
      }}
    >
      <AspectRatio ratio="1" sx={{ width: 60 }}>
        <img
          src="https://th.bing.com/th/id/R.6851cdf7d43bb17bcbd9040adfad2e9e?rik=JUS%2bP5TneLeJrA&riu=http%3a%2f%2fpunjabikhurki.com%2fwp-content%2fuploads%2f2016%2f08%2farijit-singh.jpg&ehk=gVlTL%2bEVte35YjcUS5tRZwKK595DZucKrZGj9R29S%2f8%3d&risl=&pid=ImgRaw&r=0"
          srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
          loading="lazy"
          alt=""
        />
        
      </AspectRatio>
      
      <div>
        <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
          Yosemite Park
        </Typography>
        <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
          <Link
            overlay
            underline="none"
            href="#interactive-card"
            sx={{ color: 'text.tertiary' }}
          >
            California, USA
          </Link>
        </Typography>
      </div>
      <IconButton aria-label="play/pause" style={{border:'2px solid white' , height:20 ,width:20 ,margin:'auto'}}>
        <RecommendIcon sx={{ height: 20, width: 20 ,color:'white'}}/>
      </IconButton>
      <IconButton aria-label="play/pause" style={{border:'2px solid white' , height:40 ,width:40 ,margin:'auto'}}>
        <PlayArrowIcon sx={{ height: 30, width: 30 ,color:'white'}} />
      </IconButton>
      
    </Card>
  );
}