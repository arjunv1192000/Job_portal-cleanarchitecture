import React from 'react'
import { Box, List, Stack,Typography,Avatar } from '@mui/material'

function Sidebar() {
  return (
    <Box sx={{ width: "20%", height:800, borderRadius: 6, backgroundColor: 'white', marginLeft: 5, boxShadow: 6,marginTop:5}}>
        <Typography textAlign={'center'} marginTop={1} fontSize={24} fontWeight={500}>
          Chats

          </Typography>
          <Box sx={{ width: "90%", height:80, borderRadius: 4, backgroundColor: '#c6e3fa',marginTop:1,marginLeft:2}}>
            <Stack direction={'row'}>
            <Avatar
            alt=""
            src=""
            sx={{ width: 50, height: 50, marginTop:2,marginLeft:2 }}
          />
          <Typography textAlign={'center'} marginTop={3} fontSize={18} fontWeight={500} marginLeft={3}>
                    Rahul

          </Typography>

            </Stack>
         

          </Box>
          <Box sx={{ width: "90%", height:80, borderRadius: 4, backgroundColor: '#c6e3fa',marginTop:1,marginLeft:2}}>
            <Stack direction={'row'}>
            <Avatar
            alt=""
            src=""
            sx={{ width: 50, height: 50, marginTop:2,marginLeft:2 }}
          />
          <Typography textAlign={'center'} marginTop={3} fontSize={18} fontWeight={500} marginLeft={3}>
                        Arjun

          </Typography>

            </Stack>
         

          </Box>
          <Box sx={{ width: "90%", height:80, borderRadius: 4, backgroundColor: '#c6e3fa',marginTop:1,marginLeft:2}}>
            <Stack direction={'row'}>
            <Avatar
            alt=""
            src=""
            sx={{ width: 50, height: 50, marginTop:2,marginLeft:2 }}
          />
          <Typography textAlign={'center'} marginTop={3} fontSize={18} fontWeight={500} marginLeft={3}>
                        Arjun

          </Typography>

            </Stack>
         

          </Box>
         
          
         

    </Box>
   
  )
}

export default Sidebar