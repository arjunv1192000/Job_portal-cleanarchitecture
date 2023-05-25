import React from 'react'
import { Box, Stack, Typography, Avatar, Divider } from '@mui/material'

function Footer() {
  return (
    <Box sx={{ height: 300, width: "100%", marginTop: 3, }}>
      <Stack>
        <Stack direction={'row'}>


          <Stack marginLeft={5} >
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 400,
                letterSpacing: '.3rem',
                color: '#1976d2',
                textDecoration: 'none',
                marginLeft: 4,
                marginTop: 3,

              }}
            >
              HireX
            </Typography>
            <Typography marginLeft={3} marginTop={3} fontSize={12} fontWeight={400} width={300}>
              The AliStudio Design team has a vision to establish a trusted platform that enables productive and healthy enterprises in a world of digital and remote everything, constantly changing work patterns and norms, and the need for organizational resiliency.


            </Typography>
            <Stack direction={'row'} marginLeft={2}   >
              <Avatar
                alt=""
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                sx={{ width: 50, height: 50, marginTop: 2, marginRight: 2 }}
              />
              <Avatar
                alt=""
                src="https://w7.pngwing.com/pngs/722/1011/png-transparent-logo-icon-instagram-logo-instagram-logo-purple-violet-text-thumbnail.png"
                sx={{ width: 50, height: 50, marginTop: 2, marginRight: 2 }}
              />
              <Avatar
                alt=""
                src="https://w7.pngwing.com/pngs/239/740/png-transparent-twitter-logo-icon-twitter-file-logo-social-media-news-thumbnail.png"
                sx={{ width: 50, height: 50, marginTop: 2, }}
              />


            </Stack>




          </Stack>
          <Typography marginLeft={4} marginTop={5} fontSize={18} fontWeight={400} width={300}>
            Resources


          </Typography>
          <Typography marginLeft={3} marginTop={5} fontSize={18} fontWeight={400} width={300}>
            Community


          </Typography>
          <Typography marginLeft={3} marginTop={5} fontSize={18} fontWeight={400} width={300}>
            Quick links


          </Typography>
          <Typography marginLeft={3} marginTop={5} fontSize={18} fontWeight={400} width={300}>
            More


          </Typography>
        </Stack>

        <Divider></Divider>
        <Divider></Divider>
        <Typography marginLeft={5} marginTop={2} fontSize={10} fontWeight={400} width={300}>
        Copyright © 2023. all right reserved


          </Typography>
      </Stack>

    </Box>

  )
}

export default Footer