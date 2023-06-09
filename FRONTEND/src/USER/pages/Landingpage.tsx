import React from 'react'
import { Box, Stack, Grid, Typography } from '@mui/material'
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Rightbar from '../components/Rightbar';
import Jobpost from '../components/Jobpost';
import Footer from '../components/Footer'
import Background from '../components/Background';
import { useEffect, useState } from 'react';
import axios from '../utils/axios.ts'
import Pagination from '@mui/material/Pagination';


type jobs = {
    _id: string;
    recruiterId: string;
    jobTitle: string;
    jobType: string;
    location: string;
    salary: string;
    date: string;
    opening: string;
    image: string;
    companyname: string;

};

function Landingpage() {
    const [alljobs, setalljobs] = useState<jobs[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [jobsPerPage] = useState(4); 
    const [totalCount, setTotalCount] = useState(0);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        const getalljobs = () => {
            axios.get('/jobs/getalljobs?page=' + currentPage)
                .then((response) => {
                    setalljobs(response.data.jobs);
                    setTotalCount(response.data.totalCount);
                    const calculatedPageCount = Math.ceil(response.data.totalCount / jobsPerPage);
                    setPageCount(calculatedPageCount);
                })
                .catch((error) => {
                    console.error(error.message);
                });

        }
        getalljobs()


    }, [currentPage]);

    const handlePageChange = (event: any, page: React.SetStateAction<number>) => {
        setCurrentPage(page);
    };




    return (
        <Box >
            <Stack>
                <Header />
                <Background />
                <Box sx={{ width: "95%", height: 'auto', borderRadius: 6, backgroundColor: 'white', marginLeft: 5, marginTop: 40, boxShadow: 6, zIndex: 1 }}>
                    <Stack>
                        <Typography marginTop={6} fontSize={24} fontWeight={500} textAlign={'center'}>
                            Browse by category
                        </Typography>
                        <Rightbar />

                        <Stack direction={'row'} sx={{ marginTop: 10, marginLeft: 3 }} spacing={1}>

                            <SideBar />
                            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ padding: 1, }} >
                                {alljobs.map((job) => (
                                    <Jobpost recruiterId={job.recruiterId} jobtitle={job.jobTitle} jobType={job.jobType} location={job.location} date={job.date} salary={job.salary} jobId={job._id} image={job.recruiterId.image} companyname={job.recruiterId.companyname} />
                                ))}




                            </Grid>


                        </Stack>
                        <Pagination count={pageCount} page={currentPage} shape="rounded" sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 2 }} onChange={handlePageChange} />



                    </Stack>

                </Box>

                <Footer />




            </Stack>







        </Box>


    )
}

export default Landingpage