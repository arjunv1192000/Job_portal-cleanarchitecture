import React from 'react'
import { Box, Stack, Grid, Container, TextField, Typography, MenuItem,Avatar } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';



function Inputfiled() {
  return (
    <Box sx={{ width: "95%", height:80, backgroundColor: '#f6fbff', marginLeft: 2, marginTop: 1, zIndex: 1 }}>
        <Stack direction={'row'}>
        <Box
      sx={{
        width: 800,
        maxWidth: '100%',
        backgroundColor:'white',
        marginTop:1.5,
        marginLeft:1,
        borderRadius:4
        
      }}
    >
      <TextField fullWidth  id="fullWidth" />
    </Box>
    <Button  endIcon={<SendIcon />} sx={{color:'skyblue',marginLeft:2,marginTop:1}}>
      </Button>

        </Stack>


    </Box>
  )
}

export default Inputfiled