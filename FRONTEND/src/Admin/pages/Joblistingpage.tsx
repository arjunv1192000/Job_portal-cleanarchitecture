import React from 'react'
import Header from '../components/Header';
import Background from '../components/Background';
import { Box, Stack, Grid } from '@mui/material'
import Footer from '../components/Footer'
import Jobdatas from '../components/Jobdatas';
import axios from '../utils/axios'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


type jobs = {
    _id: string;
    jobTitle: string;
    jobType: string;
    location: string;
    salary: string;
    date: string;
    opening: string;
    expiring:boolean;
    recruiterId: {
        image: string;
        companyname: string;
        recruiterId: string;
        _id: string;

    }

};


function Joblistingpage() {
    const { recruiterId } = useParams();

    const [jobs, setJobs] = useState<jobs[]>([]);


    const fetchData = () => {
        axios
            .get('/getrecruiterjobs?id=' + recruiterId)
            .then((response) => {
                console.log(response.data.jobdata);
                setJobs(response.data.jobdata);
            })
            .catch((error) => {
                console.error(error.message);
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
                    <Stack direction={'row'} margin={4}>
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ padding: 1, }} >

                            {jobs.map((job) => (
                                <Jobdatas id={job.recruiterId} jobtitle={job.jobTitle} jobType={job.jobType} location={job.location} date={job.date} salary={job.salary} jobId={job._id} image={job.recruiterId.image} companyname={job.recruiterId.companyname} expiring={job.expiring} fetchData={fetchData} />
                            ))}
                           


                        </Grid>

                    </Stack>

                </Box>





                <Footer />
            </Stack>



        </Box>

    )
}

export default Joblistingpage