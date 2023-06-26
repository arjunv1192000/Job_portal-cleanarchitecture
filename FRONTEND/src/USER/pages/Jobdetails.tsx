import React, { useEffect, useState } from 'react';
import { Box, Stack } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from '../utils/axios.ts';
import Header from '../components/Header';
import Background from '../components/Background';
import Jobpostdetails from '../components/Jobpostdetails';
import Footer from '../components/Footer';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

type Jobs = {
  _id: string;
  id: string;
  jobTitle: string;
  jobType: string;
  location: string;
  jobTiming: string;
  jobLevel: string;
  qualification: string;
  essentialKnowledge: string;
  salary: string;
  date: string;
  about: string;
  experience: string;
  address: string;
  opening: string;
  expiring:boolean;
  skills:[string]
  recruiterId:{
    image: string;
    companyname: string;
    recruiterId: string;
    _id:string;

  }

};

function Jobdetails() {
  const { jobId } = useParams();
  const [jobs, setJobs] = useState<Jobs | null>(null);
  const theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    axios
      .get('/jobs/getsinglejob?id=' + jobId)
      .then((response) => {
        console.log(response.data.job,"jobdetails");
        setJobs(response.data.job);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [jobId]);

  if (jobs === null) {
    return <div>Loading...</div>;
  }

  

  return (
    <Box>
      <Stack direction={'column'}>
        <Header />
        <Background />
        <Box
          sx={{
            width: isMobile?900: '95%',
            height: 'auto',
            borderRadius: 6,
            backgroundColor: 'white',
            marginLeft: isMobile?6: 5,
            marginTop: isMobile?30: 40,
            boxShadow: 6,
            zIndex: 1,
          }}
        >
          <Jobpostdetails
            id={jobs.recruiterId._id}
            jobtitle={jobs.jobTitle}
            jobType={jobs.jobType}
            location={jobs.location}
            date={jobs.date}
            salary={jobs.salary}
            jobId={jobs._id}
            about={jobs.about}
            image={jobs.recruiterId.image}
            companyname={jobs.recruiterId.companyname}
            jobTiming={jobs.jobTiming}
            jobLevel={jobs.jobLevel}
            qualification={jobs.qualification}
            essentialKnowledge={jobs.essentialKnowledge}
            experience={jobs.experience}
            address={jobs.address}
            opening={jobs.opening}
            expiring={jobs.expiring}
            skills={jobs.skills}

          />
        </Box>
        <Footer />
      </Stack>
    </Box>
  );
}

export default Jobdetails;
