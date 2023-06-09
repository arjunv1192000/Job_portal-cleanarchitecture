import React from 'react'
import { Box, Stack, TextField, Button, Grid, Avatar, Typography } from '@mui/material'
import { useFormik } from 'formik';
import validationSchema from './validation/Jobcreationvalidation';
import axios from '../utils/axios'
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';



type RootState = {
    recruiter: {
        value: {
            id: string | null;
            companyname: string | null;
            name: string | null;
            email: string | null;
            access_token: string;
        };
    };
};


interface MyFormData {
    jobTitle: string;
    jobType: string;
    jobLevel: string;
    jobTiming: string;
    about: string;
    essentialKnowledge: string;
    location: string;
    qualification: string;
    salary: string;
    date: string;
    experience: string;
    address: string;
    opening: string;
}


function Updatejob() {
    const navigate = useNavigate()
    const recruiterdata = useSelector((state: RootState) => state.recruiter.value);
    const { jobid } = useParams()
    const [jobs, setjob] = useState<any>({});




    useEffect(() => {
        axios.get('/jobs/getsinglejob?id=' + jobid).then((response) => {

            setjob(response.data.job)



        }).catch((response) => {
            console.error(response.message);



        })

    }, [jobid])


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            jobTitle: jobs.jobTitle || '',
            jobType: jobs.jobType || '',
            jobLevel: jobs.jobLevel || '',
            jobTiming: jobs.jobTiming || '',
            about: jobs.about || '',
            essentialKnowledge: jobs.essentialKnowledge || '',
            location: jobs.location || '',
            qualification: jobs.qualification || '',
            salary: jobs.salary || '',
            date: jobs.date || '',
            experience: jobs.experience || '',
            address: jobs.address || '',
            opening: jobs.opening || '',
        } as MyFormData,
        validationSchema: validationSchema,
        onSubmit: (values) => {





            const body = {
                jobTitle: values.jobTitle,
                jobType: values.jobType,
                jobLevel: values.jobLevel,
                jobTiming: values.jobTiming,
                about: values.about,
                essentialKnowledge: values.essentialKnowledge,
                location: values.location,
                qualification: values.qualification,
                salary: values.salary,
                date: values.date,
                experience: values.experience,
                address: values.address,
                opening: values.opening,
                recruiterId: recruiterdata.id,
                jobId: jobs._id

            }
            console.log(body);



            axios.post("/jobs/updatejob", body).then((response) => {


                if (response.data.status == true) {
                    toast.success('Job Updated Successfully')
                    setTimeout(()=>{

                        navigate("/recruiter/dashboard")
                       

                    },1500)

                   

                } else {
                    console.log("erooorrororor");


                }


            }).catch((response) => {
                console.error(response.message);



            })




        },

    });


    return (
        <Box

            sx={{
                width: "70%",
                height: 'auto',
                borderRadius: 2,
                margin: 3,
                boxShadow: 6,



            }}
        >
            <Typography margin={5} fontSize={28} fontWeight={1000}>
                UPDATE Job
            </Typography>
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 3, width: '50ch' }, margin: 6, }} noValidate autoComplete="off" onSubmit={formik.handleSubmit} >

                <div>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="Jobtitle"
                        label="Jobtitle"
                        name="jobTitle"
                        autoComplete="Job title"
                        autoFocus
                        value={formik.values.jobTitle}
                        onChange={formik.handleChange}
                        error={formik.touched.jobTitle && Boolean(formik.errors.jobTitle)}
                        helperText={formik.touched.jobTitle && formik.errors.jobTitle}
                        sx={{ width: "60%", }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="Jobtype"
                        label="Jobtype"
                        name="jobType"
                        autoComplete="Jobtype"
                        autoFocus
                        multiline
                        value={formik.values.jobType}
                        onChange={formik.handleChange}
                        error={formik.touched.jobType && Boolean(formik.errors.jobType)}
                        helperText={formik.touched.jobType && formik.errors.jobType}
                        maxRows={4}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="Joblevel"
                        label="Joblevel"
                        name="jobLevel"
                        autoComplete="Joblevel"
                        autoFocus
                        value={formik.values.jobLevel}
                        onChange={formik.handleChange}
                        error={formik.touched.jobLevel && Boolean(formik.errors.jobLevel)}
                        helperText={formik.touched.jobLevel && formik.errors.jobLevel}
                        sx={{ width: "60%", }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="JobTiming"
                        label="JobTiming"
                        name="jobTiming"
                        autoComplete="Job  Timing"
                        autoFocus
                        value={formik.values.jobTiming}
                        onChange={formik.handleChange}
                        error={formik.touched.jobTiming && Boolean(formik.errors.jobTiming)}
                        helperText={formik.touched.jobTiming && formik.errors.jobTiming}

                        sx={{ width: "60%", }}
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="About"
                        label="About"
                        name="about"
                        autoComplete="About"
                        autoFocus
                        multiline
                        maxRows={5}
                        value={formik.values.about}
                        onChange={formik.handleChange}
                        error={formik.touched.about && Boolean(formik.errors.about)}
                        helperText={formik.touched.about && formik.errors.about}
                        sx={{ width: "60%", }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="Essential Knowledge"
                        label="Essential Knowledge"
                        name="essentialKnowledge"
                        autoComplete="Essential Knowledge"
                        multiline
                        maxRows={5}
                        autoFocus
                        value={formik.values.essentialKnowledge}
                        onChange={formik.handleChange}
                        error={formik.touched.essentialKnowledge && Boolean(formik.errors.essentialKnowledge)}
                        helperText={formik.touched.essentialKnowledge && formik.errors.essentialKnowledge}

                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="Location"
                        label="Location"
                        name="location"
                        autoComplete="Location"
                        autoFocus
                        value={formik.values.location}
                        onChange={formik.handleChange}
                        error={formik.touched.location && Boolean(formik.errors.location)}
                        helperText={formik.touched.location && formik.errors.location}

                    />



                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="Qualifiaction"
                        label="Qualifiaction"
                        name="qualification"
                        autoComplete="Qualifiaction"
                        autoFocus
                        value={formik.values.qualification}
                        onChange={formik.handleChange}
                        error={formik.touched.qualification && Boolean(formik.errors.qualification)}
                        helperText={formik.touched.qualification && formik.errors.qualification}

                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="Salary"
                        label="Salary"
                        name="salary"
                        autoComplete="Salary"
                        autoFocus
                        value={formik.values.salary}
                        onChange={formik.handleChange}
                        error={formik.touched.salary && Boolean(formik.errors.salary)}
                        helperText={formik.touched.salary && formik.errors.salary}

                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="date"
                        label=""
                        name='date'
                        autoComplete="Salary"
                        type='date'
                        autoFocus
                        value={formik.values.date}
                        onChange={formik.handleChange}
                        error={formik.touched.date && Boolean(formik.errors.date)}
                        helperText={formik.touched.date && formik.errors.date}

                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="Experience"
                        label="Experience"
                        name="experience"
                        autoComplete="Experience"
                        autoFocus
                        value={formik.values.experience}
                        onChange={formik.handleChange}
                        error={formik.touched.experience && Boolean(formik.errors.experience)}
                        helperText={formik.touched.experience && formik.errors.experience}

                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="Address"
                        label="Address"
                        name="address"
                        autoComplete="Experience"
                        autoFocus
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        error={formik.touched.address && Boolean(formik.errors.address)}
                        helperText={formik.touched.address && formik.errors.address}

                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="Opening"
                        label="Opening"
                        name="opening"
                        autoComplete="Opening"
                        autoFocus
                        value={formik.values.opening}
                        onChange={formik.handleChange}
                        error={formik.touched.opening && Boolean(formik.errors.opening)}
                        helperText={formik.touched.opening && formik.errors.opening}

                    />


                </div>
                <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, height: 60, width: "60%", backgroundColor: '#131392', ml: 20 }} >
                    Submit
                </Button>


            </Box>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </Box>


    )
}

export default Updatejob