import React from 'react'
import { Box, Stack,Button } from '@mui/material'
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


function Jobpost() {
  const navigate=useNavigate()
  return (
    <Box marginLeft={1} sx={{ width: 250  , height:200, borderRadius: 2, boxShadow: 6,backgroundColor:"white",marginBottom:3 }} onClick={() => navigate('/user/jobdetails')}>
      <Stack >
      <Stack direction={'row'}>

    
        
          <Avatar
            alt=""
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3C2p4F7n9zvRLQufC2NGXHHgT9v5sKFtNTUA6odQ&s"
            sx={{ width: 50, height: 50, marginTop:-2, marginLeft: 1.5 }}
          />

          <Typography marginLeft={2} marginTop={2} fontSize={16} fontWeight={500}>
          Facebook
          </Typography>
          <Typography marginLeft={5} marginTop={2.5} fontSize={12} fontWeight={500}>
          Facebook
          </Typography>
          
          

        </Stack>
        <Typography marginLeft={3} marginTop={2} fontSize={16} fontWeight={500}>
        UX Designer & Researcher remote 
          </Typography>
          <Stack direction={'row'} marginTop={3}>
          <ListItemButton   >
          <ListItemIcon>
          <AccountBoxIcon/>

          </ListItemIcon>
          <ListItemText primary="8-10LPA" />
        </ListItemButton>

        

        </Stack>



      </Stack>

    </Box>
  )
}

export default Jobpost