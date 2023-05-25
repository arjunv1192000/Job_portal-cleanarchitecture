import React from 'react'
import { Box, Stack, TextField, Button, Grid, Avatar, Typography } from '@mui/material'

function Creationform() {
  return (
    <Box

            sx={{
                width: "70%",
                height: 1000,
                borderRadius: 2,
                margin: 3,
                boxShadow: 6,



            }}
        >
            <Typography margin={5} fontSize={28} fontWeight={1000}>
                Create Job
            </Typography>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 3, width: '40ch' }, margin: 6,
                }}
                noValidate
                autoComplete="off"
            >

                <div>
                    <Avatar
                        alt=""
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 80, height: 80, marginTop: 4, marginLeft: 4 }}
                    />
                    <Typography marginLeft={3} >Upload your company logo</Typography>
                    <TextField
                        margin="normal"
                        required
                        id="logo"
                        label=""
                        name="name"
                        type='file'
                        autoFocus

                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="Job title"
                        label="Job title"
                        name="Job title"
                        autoComplete="Job title"
                        autoFocus
                        sx={{ width: "60%", }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="Job type"
                        label="Job type"
                        name="Job type"
                        autoComplete="Job type"
                        autoFocus
                        multiline
                        maxRows={4}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="Job level"
                        label="Job level"
                        name="Job level"
                        autoComplete="Job level"
                        autoFocus
                        sx={{ width: "60%", }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="JobTiming"
                        label="Job  Timing"
                        name="Job  Timing"
                        autoComplete="Job  Timing"
                        autoFocus

                        sx={{ width: "60%", }}
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="About"
                        label="About"
                        name="About"
                        autoComplete="About"
                        autoFocus
                        multiline
                        maxRows={5}
                        sx={{ width: "60%", }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="Essential Knowledge"
                        label="Essential Knowledge"
                        name="Essential Knowledge"
                        autoComplete="Essential Knowledge"
                        multiline
                        maxRows={5}
                        autoFocus

                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="Location"
                        label="Location"
                        name="Location"
                        autoComplete="Location"
                        autoFocus

                    />



                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="Qualifiaction"
                        label="Qualifiaction"
                        name="Qualifiaction"
                        autoComplete="Qualifiaction"
                        autoFocus

                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="Salary"
                        label="Salary"
                        name="Salary"
                        autoComplete="Salary"
                        autoFocus

                    />
                     <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="Salary"
                        label="Salary"  
                        autoComplete="Salary"
                        type='date'
                        autoFocus

                    />
                     <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="Experience"
                        label="Experience"
                        name="Experience"
                        autoComplete="Experience"
                        autoFocus

                    />
                    
                    
                    
                   






                </div>
                <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, height: 60, width: "60%", backgroundColor: '#131392',ml:20 }} >
                    Submit
                </Button>


            </Box>
        </Box>
   
  )
}

export default Creationform