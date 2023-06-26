import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SideBar from '../components/Sidebar'
import { Box, Stack, Grid, Typography } from '@mui/material'
import Applicant from '../components/Applicant'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../utils/axios'

type User = {
  _id: string;
  userId: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  jobRole: string;
  language: string;
  about: string;
  education:string;
  image: string;
  cv: string;
  

 
};

function Applicantsdetails() {
  const [users, setUsers] = useState<User[]>([]);
  const { jobId } = useParams();
  console.log(jobId, "applicants");

  useEffect(() => {
    axios
      .get('/jobs/applicants?id=' + jobId)
      .then((response) => {
        console.log(response.data.jobapplicants);
        setUsers(response.data.jobapplicants)
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [jobId]);
 
  console.log(users,"sdasfsfsfe");
  

  return (
    <Box>
      <Header />
      <Stack direction={'row'} spacing={2} marginTop={15}>
        <SideBar />
        <Box sx={{ width: "78%", height: 'auto', borderRadius: 2 }}>
          {users.length === 0 ? (
            <Typography variant="h5" align="center" mt={4}>
              No applicants found
            </Typography>
          ) : (
            users.map((user) => (
              <Applicant
                key={user._id}
                userId={user.userId}
                name={user.name}
                email={user.email}
                phone={user.phone}
                jobRole={user.jobRole}
                about={user.about}
                image={user.image}
                cv={user.cv}
                education={user.education}
                language={user.language}
                location={user.location}
                jobId={jobId ?? ''}
               
            
              />
            ))
          )}
        </Box>
      </Stack>
      <Footer />
    </Box>
  )
}

export default Applicantsdetails;
