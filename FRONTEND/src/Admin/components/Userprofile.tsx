import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import SchoolIcon from '@mui/icons-material/School';

function Userprofile() {
  return (
    <Box

    sx={{ width: "70%", height: 1000, borderRadius: 2, margin: 3, }}>
    <Stack>
        <Stack direction={'row'}>
            <Box

                sx={{
                    width: 150,
                    height: 150,
                    borderRadius: 2,
                    backgroundImage: `url()`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    margin: 5



                }}
            ></Box>
            <Stack>
                <Typography marginTop={6} fontSize={24} fontWeight={500}>
                   ewrjweiowe
                </Typography>
                <Typography fontSize={16} fontWeight={500} paddingTop={1} >
                   ewrewrokewroiew

                </Typography>
                <Typography fontSize={16} fontWeight={500} paddingTop={2} >
                   uirierkwer

                </Typography>
                <Typography fontSize={16} fontWeight={500} paddingTop={2}>
                    djsswodwoidw

                </Typography>

            </Stack>


        </Stack>
        <Typography fontSize={24} fontWeight={500} margin={5}>
            About Me
        </Typography>
        <Typography fontSize={18} fontWeight={500} marginLeft={5} marginTop={1}>
            fjdsfkjdkfnsdiensdkcscnskd
        </Typography>
        <Stack direction="row" alignItems="center" gap={3} margin={3}>
            <AddLocationAltIcon />

            <Typography variant="body1">Location :</Typography>
            <Typography variant="body1"> asasdasdasdas</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" gap={3} margin={3}>
            <SchoolIcon />

            <Typography variant="body1">Education :</Typography>
            <Typography variant="body1"> sadasdasdasd</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" gap={3} margin={3}>
            <SchoolIcon />

            <Typography variant="body1">Language :</Typography>
            <Typography variant="body1"> sddsdsad</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" gap={3} margin={3}>
             <SchoolIcon/>
            
            <Typography variant="body1">Personal website:</Typography>
            <Typography variant="body1">wwww.sdsdsd.com</Typography>
        </Stack>
       

    </Stack>

</Box>
   
  )
}

export default Userprofile