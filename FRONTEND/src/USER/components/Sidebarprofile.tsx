import React from 'react'
import { Box, Stack, Typography, Button,List } from '@mui/material'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { useNavigate } from 'react-router-dom';

function Sidebarprofile() {
  const navigate=useNavigate()
  return (
    <Box marginLeft={9} sx={{ width: 300,height:300,  borderRadius: 2,marginTop:3}} >
      <Box  sx={{borderRadius:2,boxShadow:6,width:300,height:220}} >
        <Stack >
          <List>
            <ListItemButton onClick={() => navigate('/user/profile')}  >
              <ListItemIcon>
                <HomeIcon />

              </ListItemIcon>
              <ListItemText primary="My Profile" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate('/user/myjob')} >
              <ListItemIcon>
                <AccountBoxIcon />

              </ListItemIcon>
              <ListItemText primary="My Jobs" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate('/user/savedjob')} >
              <ListItemIcon>
                <AccountBoxIcon />

              </ListItemIcon>
              <ListItemText primary="Saved Jobs" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate('/user/addprofile')}  >
              <ListItemIcon>
                <PermContactCalendarIcon />

              </ListItemIcon>
              <ListItemText primary="Update Profile" />
            </ListItemButton>

          </List>

        </Stack>

      </Box>


    </Box>
   
  )
}

export default Sidebarprofile