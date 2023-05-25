import React from 'react'
import { Box, Stack,Button } from '@mui/material'
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Avatar from '@mui/material/Avatar';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useNavigate } from 'react-router-dom';

function Jobpost2() {
  const navigate=useNavigate()
  return (
    <Box marginLeft={1} sx={{ width: 350, height:'auto', borderRadius: 2, boxShadow: 6, }}  onClick={() => navigate('/user/jobdetails')}>
      <Stack >
      <Stack direction={'row'}>
          <Avatar
            alt=""
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3C2p4F7n9zvRLQufC2NGXHHgT9v5sKFtNTUA6odQ&s"
            sx={{ width: 50, height: 50, marginTop: 5, marginLeft: 1 }}
          />

          <Typography marginLeft={3} marginTop={7} fontSize={16} fontWeight={500}>
          Facebook
          </Typography>
          <ListItemButton  sx={{marginTop:6,marginLeft:6}} >
          <ListItemIcon>
          <AddLocationAltIcon/>

          </ListItemIcon>
          <ListItemText primary="kochi" />
        </ListItemButton>

        </Stack>
        <Typography marginLeft={3} marginTop={3} fontSize={16} fontWeight={500}>
        UX Designer & Researcher remote
        </Typography>
        <Stack direction={'row'} spacing={2} marginTop={3}>
          <ListItemButton  >
            <ListItemIcon>
              <AccountBoxIcon />

            </ListItemIcon>
            <ListItemText primary="Remote" />
          </ListItemButton>
          <ListItemButton  >
            <ListItemIcon>
            <AccessTimeIcon/>

            </ListItemIcon>
            <ListItemText primary="5 minago" />
          </ListItemButton>

        </Stack>
        <Typography marginLeft={3} marginTop={3} fontSize={16} fontWeight={300}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur
          
          
          </Typography>
        
        <Stack direction={'row'} marginTop={5} marginLeft={4} flexDirection={'row'}>
          

            <ListItemText primary="HTML" />
            <ListItemText primary="CSS" />
            <ListItemText primary="Javascript" />
            
         


        </Stack>
        <Stack direction={'row'} marginTop={3}>
          <ListItemButton   >
          <ListItemIcon>
          <AccountBoxIcon/>

          </ListItemIcon>
          <ListItemText primary="8-10LPA" />
        </ListItemButton>

        <Button variant="contained" sx={{ width: 100,height:40, borderRadius: 2, backgroundColor: "#3C6FF5" ,marginRight:4}} >Apply</Button>

        </Stack>
        
       



      </Stack>

    </Box>
   
  )
}

export default Jobpost2