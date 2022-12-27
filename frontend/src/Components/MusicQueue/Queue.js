import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import { TransitionGroup } from 'react-transition-group';
import SongCard from '../SongCard/SongCard';
const FRUITS = [
  '🍏 Apple',
  '🍌 Banana',
  '🍍 Pineapple',
  '🥥 Coconut',
  '🍉 Watermelon',
];

function renderItem({ item, handleRemoveFruit }) {
  return (
    <ListItem>
        <SongCard/>
    </ListItem>
  );
}

function Queue() {
    const [fruitsInBasket, setFruitsInBasket] = React.useState(FRUITS.slice(0, 3));

    const handleAddFruit = () => {
        const nextHiddenItem = FRUITS.find((i) => !fruitsInBasket.includes(i));
        if (nextHiddenItem) {
        setFruitsInBasket((prev) => [nextHiddenItem, ...prev]);
        }
    };

    const handleRemoveFruit = (item) => {
        setFruitsInBasket((prev) => [...prev.filter((i) => i !== item)]);
    };

    const addFruitButton = (
        <Button
            variant="contained"
            disabled={fruitsInBasket.length >= FRUITS.length}
            onClick={handleAddFruit}
        >
            Add to Queue
        </Button>
    );

  return (
    <div>
      <Box sx={{ mt: 1 }}  style={{marginTop:'5%' ,color:'white' ,backgroundColor:'black' ,borderRadius:15}}>
        <p style={{display:'inline' ,fontWeight:'bolder' ,fontSize:30 }} >Queue</p>
        <List>
          <TransitionGroup>
            {fruitsInBasket.map((item) => (
              <Collapse key={item}>
                {renderItem({ item, handleRemoveFruit })}
              </Collapse>
            ))}
          </TransitionGroup>
        </List>
        {/* <div>{addFruitButton}</div> */}
         
      </Box>
    </div>
  )
}

export default Queue