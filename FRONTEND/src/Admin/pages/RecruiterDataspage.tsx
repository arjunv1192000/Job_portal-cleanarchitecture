import React from 'react'
import Header from '../components/Header';
import Background from '../components/Background';
import { Box, Stack, Grid } from '@mui/material'
import Footer from '../components/Footer'
import Recruiterdata from '../components/Recruiterdata';
import { useEffect, useState } from 'react';
import axios from '../utils/axios'

type recruiter = {
  _id: string;
  name: string;
  email: string;
  image: string;
  companyname: string;
  recruiterId: string;
  isBlock:boolean;

};


function RecruiterDataspage() {
  const [recruiter, setrecruiter] = useState<recruiter[]>([]);

  const fetchData = () => {

    axios.get('/getrecruiterdetails')
      .then((response) => {
        console.log(response.data.data);
        setrecruiter(response.data.data);
      })
      .catch((response) => {
        console.error(response.message);
      });
  }


  useEffect(() => {
    fetchData()

  }, []);
  return (
    <Box >

      <Stack direction={'column'}  >
        <Header />
        <Background />

        <Box sx={{ width: "95%", height: 'auto', borderRadius: 6, backgroundColor: 'white', marginLeft: 5, marginTop: 40, boxShadow: 6, zIndex: 1 }}>
          <Stack direction={'column'}>

            {recruiter.map((data) =>

              <Recruiterdata recruiterId={data._id}  name={data.name} companyname={data.companyname} email={data.email} image={data.image} fetchData={fetchData} isBlock={data.isBlock}/>


            )}




          </Stack>

        </Box>





        <Footer />
      </Stack>



    </Box>
  )
}

export default RecruiterDataspage