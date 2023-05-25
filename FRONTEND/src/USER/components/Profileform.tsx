import React from 'react'
import { Box, Stack, TextField, Button, Grid, Avatar, Typography } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


function Profileform() {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value as string);
    };
    return (
        <Box

            sx={{
                width: "70%",
                height: 1000,
                borderRadius: 2,
                margin: 3,
              



            }}
        >
            <Typography margin={5} fontSize={28} fontWeight={1000}>
                Update your profile
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
                    <Typography marginLeft={3} >Upload your profile image</Typography>
                    <TextField
                        margin="normal"
                        required
                        id="profile"
                        label=""
                        name="name"
                        type='file'
                        autoFocus

                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Fullname"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        sx={{ width: "60%", }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="about"
                        label="About"
                        name="About"
                        autoComplete="About"
                        autoFocus
                        multiline
                        maxRows={4}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="phone"
                        label="Phonenumber"
                        name="phonenumber"
                        autoComplete="phonenumber"
                        autoFocus
                        sx={{ width: "60%", }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus

                        sx={{ width: "60%", }}
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="personalwebsite"
                        label="Personalwebsite"
                        name="Personalwebsite"
                        autoComplete="Personalwebsite"
                        autoFocus
                        sx={{ width: "60%", }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="education"
                        label="Education"
                        name="Education"
                        autoComplete="Education"
                        autoFocus

                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="language"
                        label="Language"
                        name="Language"
                        autoComplete="Language"
                        autoFocus

                    />



                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="jobrole"
                        label="Jobrole"
                        name="Jobrole"
                        autoComplete="Jobrole"
                        autoFocus

                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="location"
                        label="Location"
                        name="Location"
                        autoComplete="Location"
                        autoFocus

                    />
                    <Typography marginLeft={2} >Upload your CV</Typography>
                    <TextField
                        margin="normal"
                        required
                        id="name"
                        name="name"
                        type='file'
                        autoComplete="name"
                        autoFocus

                    />
                    
                    
                   






                </div>
                <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, height: 60, width: "60%", backgroundColor: '#131392',ml:20 }} >
                    Submit&Register
                </Button>


            </Box>
        </Box>

    )
}

export default Profileform