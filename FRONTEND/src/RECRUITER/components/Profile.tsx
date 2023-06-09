import React from 'react'
import { Box, Stack, TextField, Button, Grid, Avatar, Typography } from '@mui/material'

function Profile() {
  return (
    <Box

            sx={{ width: "70%", height: 1000, borderRadius: 2, margin: 3,   }}>
            <Stack>
                <Stack direction={'row'}>
                    <Box

                        sx={{
                            width: 150,
                            height: 150,
                            borderRadius: 2,
                            backgroundImage: '',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            display: 'flex', justifyContent: 'center', alignItems: 'center',
                            margin: 5



                        }}
                    ></Box>
                    <Stack>
                        <Typography marginTop={6} fontSize={24} fontWeight={500}>
                       
                          
                        </Typography>
                        <Typography fontSize={16} fontWeight={500} paddingTop={1} >
                
                        
                       
                        </Typography>
                        <Typography fontSize={16} fontWeight={500} paddingTop={2} >
                       
                        
                        </Typography>
                        <Typography fontSize={16} fontWeight={500} paddingTop={2}>
                       
                       
                        </Typography>
                        <Typography fontSize={16} fontWeight={500} paddingTop={2}>
                       
                       
                       </Typography>

                    </Stack>


                </Stack>
                

            </Stack>

        </Box>
  )
}

export default Profile