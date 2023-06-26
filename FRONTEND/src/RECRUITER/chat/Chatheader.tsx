import React from 'react'
import { Box, Stack, Grid, Container, TextField, Typography, MenuItem,Avatar } from '@mui/material';
function chatheader() {
  return (
    <Box sx={{ width: "95%", height:80, borderRadius: 3, marginLeft: 2, marginTop: 2, boxShadow: 6, zIndex: 1,backgroundColor:"#c6e3fa" }}>
        <Stack direction={'row'}>
        <Avatar
            alt=""
            src=""
            sx={{ width: 50, height: 50, marginTop:2,marginLeft:3}}
          />
          <Typography textAlign={'center'} marginTop={4} fontSize={18} fontWeight={500} marginLeft={3}>
                    Rahul

          </Typography>

        </Stack>

    </Box>
    
  )
}

export default chatheader