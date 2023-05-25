import React from 'react'
import { Box, Container, List, Stack, Button,Typography } from '@mui/material'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

function Rightbar() {
  return (
    <div style={{ width: '100%', overflowX: 'auto' }}>
    <Box
      sx={{
        width: '70%',
        height: 100,
        backgroundColor: 'white',
        marginTop: 5,
        marginLeft: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflowX: 'scroll',
        overflowY: 'hidden',
        '&::-webkit-scrollbar':{
          display:'none'
        }
      }}
    >
      <Stack direction={'row'} spacing={2}>
        <Button variant="outlined" sx={{ width: 200, height: 60, backgroundColor: 'white', borderColor: 'blue', color: 'black' }}>
          Software
        </Button>
        <Button variant="outlined" sx={{ width: 200, height: 60, backgroundColor: 'white', borderColor: 'blue', color: 'black' }}>
          Software
        </Button><Button variant="outlined" sx={{ width: 200, height: 60, backgroundColor: 'white', borderColor: 'blue', color: 'black' }}>
          Software
        </Button><Button variant="outlined" sx={{ width: 200, height: 60, backgroundColor: 'white', borderColor: 'blue', color: 'black' }}>
          Software
        </Button><Button variant="outlined" sx={{ width: 200, height: 60, backgroundColor: 'white', borderColor: 'blue', color: 'black' }}>
          Software
        </Button><Button variant="outlined" sx={{ width: 200, height: 60, backgroundColor: 'white', borderColor: 'blue', color: 'black' }}>
          Software
        </Button>
      </Stack>
    </Box>
  </div>
  
  )
}

export default Rightbar