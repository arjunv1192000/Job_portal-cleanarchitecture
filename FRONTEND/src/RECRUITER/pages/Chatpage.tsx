import React from 'react'
import { Box, Stack, Grid, Container, TextField, Typography, MenuItem } from '@mui/material';
import Footer from '../components/Footer';
import Background from '../components/Background';
import Header from '../components/Header';
import Sidebar from '../chat/Sidebar';
import Messages from '../chat/Messages';
import Inputfiled from '../chat/Inputfiled';
import Chatheader from '../chat/Chatheader'


function Chatpage() {
  return (
    <Box >

      <Stack direction={'column'}  >
        <Header />
        <Background />

        <Box sx={{ width: "95%", height:900, borderRadius: 6, backgroundColor: 'white', marginLeft: 5, marginTop: 40, boxShadow: 6, zIndex: 1 }}>
          <Stack direction={'row'}>
            <Sidebar/>
            <Box sx={{ width: "60%", height:820, borderRadius: 6, backgroundColor: 'white', marginLeft: 6, boxShadow: 6,marginTop:5}}>
                <Chatheader/>   
                <Messages/>
                <Inputfiled/>
                

            </Box>


          </Stack>

        </Box>





        <Footer />
      </Stack>



    </Box>
  )
}

export default Chatpage