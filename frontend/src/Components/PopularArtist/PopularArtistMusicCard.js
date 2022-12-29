import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import PlayCircleFilledSharpIcon from '@mui/icons-material/PlayCircleFilledSharp';
export default function PopularArtistMusicCard() {
  return (
    <Card variant="soft" sx={{ width: 240 }} style={{backgroundColor:'black'}}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src="https://th.bing.com/th/id/OIP.EzVp_g95HbkRe98atZ-KbgHaEK?pid=ImgDet&rs=1"
            srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <IconButton
          aria-label="Like minimal photography"
          size="md"
          variant="solid"
          color="danger"
          sx={{
            position: 'absolute',
            zIndex: 2,
            borderRadius: '50%',
            right: '1rem',
            bottom: 0,
            transform: 'translateY(50%)',
          }}
        >
          <PlayCircleFilledSharpIcon  style={{fontSize:'50' ,color:'white'}} />
        </IconButton>
      </CardOverflow>
      <Typography level="h2" sx={{ fontSize: 'xl', mt: 2 }}>
        <Link href="#multiple-actions" overlay underline="none" textColor={'white'}>
          Arijit Singh
        </Link>
      </Typography>
      <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
        <Link href="#multiple-actions">Description</Link>
      </Typography>
      <CardOverflow
        variant="soft"
        sx={{
          display: 'flex',
          gap: 1,
          py: 1.5,
          px: 'var(--Card-padding)',
          bgcolor: 'background.level1',
        }}
      >
        <Typography level="body3" sx={{ fontWeight: 'md'}} style={{color:'white'}}>
          6.3k Likes
        </Typography>
      </CardOverflow>
    </Card>
  );
}