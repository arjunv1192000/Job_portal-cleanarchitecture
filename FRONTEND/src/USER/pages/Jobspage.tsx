import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Box, Stack, Grid, Container, TextField } from '@mui/material';
import Footer from '../components/Footer';
import Background from '../components/Background';
import SideBar from '../components/SideBar.tsx';
import Jobposts from '../components/Jobposts.tsx';
import axios from '../utils/axios.ts';
import Pagination from '@mui/material/Pagination';

type Jobs = {
  _id: string;
  recruiterId: string;
  jobTitle: string;
  jobType: string;
  location: string;
  salary: string;
  date: string;
  about: string;
  image: string;
  companyname: string;
};

function Jobspage() {
  const [alljobs, setAllJobs] = useState<Jobs[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(4);
  const [totalCount, setTotalCount] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    const getJobData = async () => {
      try {
        const response = await axios.get('/jobs/getalljobssearch', {
          params: {
            page: currentPage,
            query: query,
          },
        });

        const { jobs, countofjob } = response.data;
        setAllJobs(jobs);
        setTotalCount(countofjob);
        const calculatedPageCount = Math.ceil(countofjob / jobsPerPage);
        setPageCount(calculatedPageCount);
      } catch (error) {
        console.error(error.message);
      }
    };

    getJobData();
  }, [currentPage, query]);

  const handlePageChange = (event: any, page: number) => {
    setCurrentPage(page);
  };

  return (
    <Box>
      <Stack>
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
          <Container
            maxWidth="md"
            sx={{
              mt: 20,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <TextField
              type="search"
              id="search"
              label="Search"
              onChange={(e) => setQuery(e.target.value)}
              sx={{ width: 600 }}
            />
          </Container>

          <Stack direction={'row'} sx={{ marginTop: 10, marginLeft: 3 }} spacing={1}>
            <SideBar />
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ padding: 1 }}>
              {alljobs.map((job) => (
                <Jobposts
                  key={job._id}
                  recruiterId={job.recruiterId}
                  jobtitle={job.jobTitle}
                  jobType={job.jobType}
                  location={job.location}
                  date={job.date}
                  salary={job.salary}
                  jobId={job._id}
                  about={job.about}
                  image={job.recruiterId.image}
                  companyname={job.recruiterId.companyname}
                />
              ))}
            </Grid>
          </Stack>

          <Pagination
            count={pageCount}
            page={currentPage}
            shape="rounded"
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 2 }}
            onChange={handlePageChange}
          />
        </Box>

        <Footer />
      </Stack>
    </Box>
  );
}

export default Jobspage;
