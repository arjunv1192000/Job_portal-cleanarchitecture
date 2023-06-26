import React from 'react';
import Header from '../components/Header';
import Background from '../components/Background';
import { Box, Stack, Typography } from '@mui/material';
import Sidebarprofile from '../components/Sidebarprofile';
import Savedjobs from '../components/Savedjobs';
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
  _id: string;
  recruiterId: string;
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
  image: string;
  companyname: string;
  experience: string;
  address: string;
  opening: string;
};

function Myjobs() {
  const userdata = useSelector((state: RootState) => state.user.value);
  const [jobs, setJobs] = useState<Jobs[]>([]);
  const theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down('sm'));
  const id = userdata.id;

  useEffect(() => {
    axios
      .get('/profile/getsavedjobs?id=' + id)
      .then((response) => {
        console.log(response.data.savedjobs);
        setJobs(response.data.savedjobs);
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
            marginLeft:isMobile?2: 5,
            marginTop:isMobile?30: 40,
            boxShadow: 6,
            zIndex: 1,
           

            
          }}
        >
          <Stack direction={isMobile?'column' : 'row'}>
            <Sidebarprofile />
            <Box sx={{ width: '100%', height: 'auto', borderRadius: 2 }}>
              {jobs.length === 0 ? (
                <Box sx={{ textAlign: 'center', padding: '1rem',marginTop:10 }}>
                  <Typography variant="h5">No saved jobs found</Typography>
                </Box>
              ) : (
                jobs.map((job) => (
                  <Savedjobs
                    key={job._id}
                    recruiterId={job.recruiterId._id}
                    jobTitle={job.jobTitle}
                    jobType={job.jobType}
                    location={job.location}
                    date={job.date}
                    salary={job.salary}
                    jobId={job._id}
                    about={job.about}
                    image={job.recruiterId.image}
                    companyname={job.recruiterId.companyname}
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
