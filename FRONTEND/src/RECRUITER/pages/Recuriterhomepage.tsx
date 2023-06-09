import React from 'react'
import { Box, Stack, Grid } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SideBar from '../components/Sidebar'
import Background from '../components/Background'
import Dashboard  from '../components/Dashboard'
import { useEffect,useState} from 'react';
import axios from '../utils/axios'
import { useSelector } from 'react-redux'

type RootState = {
  user: {
    value: {
      id: string | null;
      companyname:string |null;
      name: string | null;
      email: string | null;
      access_token: string;
    };
  };
};
type job = {
  _id: string;
  jobTitle: string;
  about: string;
  salary: string;
  
};


function Recuriterhomepage() {
  const recruiterdata = useSelector((state:RootState) => state.user.value);
  const id=recruiterdata.id
  const [jobs, setJobs] = useState<job[]>([]);

  useEffect(() => {
    axios.get('/jobs/getrecruiterjob?id=' + id).then((response) => {
        console.log(response.data.jobs);
        setJobs(response.data.jobs);
      


    }).catch((response) => {
        console.error(response.message);



    })

}, [id])


  return (
    <Box>
      <Stack>
        <Header />
        <Background />
        <Box sx={{ width: "95%", height: 'auto', borderRadius: 6, backgroundColor: 'white', marginLeft: 5, marginTop:40, boxShadow: 6, zIndex: 1 }}>
          <Stack direction={'row'} spacing={2} marginTop={10}  >
            <SideBar />
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ padding: 1, }} >
            {jobs.map((job) => (
                <Dashboard  jobid={job._id} jobtitle={job.jobTitle} about={job.about}  salary={job.salary}/>
              ))}
            


          </Grid>
           </Stack>
         

        </Box>
        <Footer/>

      </Stack>

    </Box>

  )
}

export default Recuriterhomepage