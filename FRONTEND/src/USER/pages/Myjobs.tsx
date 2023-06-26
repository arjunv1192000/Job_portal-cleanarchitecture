import React from 'react';
import Header from '../components/Header';
import Background from '../components/Background';
import { Box, Stack,Typography } from '@mui/material';
import Sidebarprofile from '../components/Sidebarprofile';
import Userjobs from '../components/Userjobs';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from '../utils/axios.ts';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

type RootState = {
  user: {
    value: {
      id: string | null;
      name: string | null;
      email: string | null;
      image: string | null;
      access_token: string;
    };
  };
};

type Jobs = {
     status:string;
    _id:{
      _id: string;
      jobTitle: string;
      jobType: string;
      jobTiming: string;
      jobLevel: string;
      qualification: string;
      essentialKnowledge: string;
      location: string;
      salary: string;
      date: string;
      about: string;
      experience: string;
      address: string;
      opening: string;
      recruiterId:{
        image: string;
        companyname: string;
        recruiterId: string;
        _id:string;
  
      }
    

  }
  
}

function Myjobs() {
  const userdata = useSelector((state: RootState) => state.user.value);
  const [jobs, setJobs] = useState<Jobs[]>([]);
  const theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down('sm'));

  const id = userdata.id;

  useEffect(() => {
    axios
      .get('/profile/getmyjobs?id=' + id)
      .then((response) => {
        console.log(response.data.appliedjobs);
        setJobs(response.data.appliedjobs);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [id]);

  return (
    <Box>
      <Stack direction={'column'}>
        <Header />
        <Background />

        <Box
          sx={{
            width:isMobile?700: '95%',
            height: 'auto',
            borderRadius: 6,
            backgroundColor: 'white',
            marginLeft: isMobile?2: 5,
            marginTop: isMobile?30: 40,
            boxShadow: 6,
            zIndex: 1,
          }}
        >
          <Stack direction={isMobile?'column' : 'row'}>
            <Sidebarprofile />
            <Box sx={{ width:isMobile?'100%': '70%', height:  'auto', borderRadius: 2 ,marginleft:isMobile?10:0}}>
              {jobs?.length === 0 ? (
                <Box sx={{ textAlign: 'center', padding: '1rem',marginTop:10 }}>
                  <Typography variant="h5">No jobs found</Typography>
                </Box>
              ) : (
                jobs?.map((job) => (
                  <Userjobs
                    key={job._id?._id}
                    status={job.status}
                    recruiterId={job._id?.recruiterId._id}
                    jobTitle={job._id ?.jobTitle}
                    jobType={job._id?.jobType}
                    location={job._id?.location}
                    date={job._id?.date}
                    salary={job._id?.salary}
                    jobId={job._id?._id}
                    about={job._id?.about}
                    image={job._id?.recruiterId.image}
                    companyname={job._id?.recruiterId.companyname}
                  />
                ))
              )}
            </Box>
          </Stack>
        </Box>

        <Footer />
      </Stack>
    </Box>
  );
}

export default Myjobs;
