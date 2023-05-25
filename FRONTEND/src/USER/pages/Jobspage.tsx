import React from 'react'
import Header from '../components/Header';
import { Box,Stack,Grid} from '@mui/material'
import Searchjob from '../components/Searchjob';
import Rightbar from '../components/Rightbar';
import SideBar from '../components/SideBar';
import Sidebarjobs from '../components/Sidebarjobs';
import Jobpost2 from '../components/Jobposts';
import Footer from '../components/Footer'
import Background from '../components/Background';
import Jobview from '../components/Jobview';


function Jobspage() {
  return (
    <Box>
      <Stack>
      <Header />
        <Background/>
        <Jobview/>
        
      </Stack>
      
      
    
    </Box>
  )
}

export default Jobspage