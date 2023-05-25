import React from 'react'
import { Box,List } from '@mui/material'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

function Sidebarjobs() {
  return (
    <Box   >
       <Box   sx={{ width: 280,height: 500,borderRadius:2, boxShadow:6}}>
       <List>
       <ListItemButton  sx={{borderRadius:3,width:250,marginLeft:2 ,border:'solid',}} >
          <ListItemText primary="Developer" sx={{marginLeft:8}}  />
        </ListItemButton>
        

       </List>
      

       </Box>
      </Box>
  )
}

export default Sidebarjobs