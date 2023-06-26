import React from 'react'
import { Box } from '@mui/material'
import { Link } from "react-router-dom";

function Pagenotfound() {
  return (
    <div>
         <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:60,
        width: 800,
        height: 800,
        backgroundImage: `url('https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7968.jpg?w=740&t=st=1686557282~exp=1686557882~hmac=8fbcd5392fd30710fb285173cfeef1106cb3da1a5c02dd065ce9786b6fbd507f')`
       
      }}
      
    >
        <Link to={'/'}  > Go back home </Link>
    </Box>
        
    </div>
  )
}

export default Pagenotfound