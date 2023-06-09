import React, { useEffect, useState } from 'react';
import { Box, Stack } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from '../utils/axios.ts';
import Header from '../components/Header';
import Background from '../components/Background';
import Jobpostdetails from '../components/Jobpostdetails';
import Footer from '../components/Footer';

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

function Jobdetails() {
  const { jobId } = useParams();
  const [jobs, setJobs] = useState<Jobs | null>(null);

  useEffect(() => {
    axios
      .get('/jobs/getsinglejob?id=' + jobId)
      .then((response) => {
        console.log(response.data.job);
        setJobs(response.data.job);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [jobId]);

  if (jobs === null) {
    return <div>Loading...</div>;
  }

  const {
    recruiterId,
    jobTitle,
    jobType,
    location,
    date,
    salary,
    _id,
    about,
    image,
    companyname,
    jobTiming,
    jobLevel,
    qualification,
    essentialKnowledge,
    experience,
    address,
    opening,
  } = jobs;

  return (
    <Box>
      <Stack direction={'column'}>
        <Header />
        <Background />
        <Box
          sx={{
            width: '95%',
            height: 'auto',
            borderRadius: 6,
            backgroundColor: 'white',
            marginLeft: 5,
            marginTop: 40,
            boxShadow: 6,
            zIndex: 1,
          }}
        >
          <Jobpostdetails
            recruiterId={recruiterId}
            jobtitle={jobTitle}
            jobType={jobType}
            location={location}
            date={date}
            salary={salary}
            jobId={_id}
            about={about}
            image={image}
            companyname={companyname}
            jobTiming={jobTiming}
            jobLevel={jobLevel}
            qualification={qualification}
            essentialKnowledge={essentialKnowledge}
            experience={experience}
            address={address}
            opening={opening}
          />
        </Box>
        <Footer />
      </Stack>
    </Box>
  );
}

export default Jobdetails;
