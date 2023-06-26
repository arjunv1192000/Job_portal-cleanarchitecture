import React from 'react'
import { Box, Stack, TextField, Button, Grid, Avatar, Typography, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material'
import { useFormik } from 'formik';
import validationSchema from './validation/Jobcreationvalidation';
import { useSelector } from "react-redux";
import axios from '../utils/axios'
import { useNavigate } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Checkbox from '@mui/material/Checkbox';


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;


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
    skills: string[];
    enddate: string;
}


function Creationform() {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            jobTitle: '',
            jobType: '',
            jobLevel: '',
            jobTiming: '',
            about: '',
            essentialKnowledge: '',
            location: '',
            qualification: '',
            salary: '',
            date: '',
            experience: '',
            address: '',
            opening: '',
            skills: [],
            enddate: ''
        } as MyFormData,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values,);




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
                enddate: values.enddate,
                skills: values.skills,

            }
            console.log(body);

            axios.post("/jobs/createjob", body).then((response) => {
                console.log(response);

                if (response.data.status == true) {

                    navigate("/recruiter/dashboard")

                } else {
                    console.log("erooorrororor");


                }


            }).catch((response) => {
                console.error(response.message);



            })




        },

    });
    const recruiterdata = useSelector((state: RootState) => state.recruiter.value);


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
                Create Job
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
                    <FormControl fullWidth margin="normal" required error={formik.touched.jobType && Boolean(formik.errors.jobType)} sx={{ width: "41%", marginTop: 3, marginLeft: 3 }}>
                        <InputLabel id="jobType-label">Job Type</InputLabel>
                        <Select
                            labelId="jobType-label"
                            id="jobType"
                            name="jobType"
                            autoComplete="Jobtype"
                            autoFocus
                            value={formik.values.jobType}
                            onChange={formik.handleChange}
                        >
                            <MenuItem value="FullTime">FullTime</MenuItem>
                            <MenuItem value="PartTime">PartTime</MenuItem>
                            <MenuItem value="Contract">Contract</MenuItem>
                            <MenuItem value="Intern">Intern</MenuItem>

                        </Select>
                        {formik.touched.jobType && Boolean(formik.errors.jobType) && (
                            <FormHelperText>{formik.errors.jobType}</FormHelperText>
                        )}
                    </FormControl>
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
                    {/* <TextField
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

                    /> */}
                    <FormControl fullWidth margin="normal" required error={formik.touched.location && Boolean(formik.errors.location)} sx={{ width: "41%", marginTop: 3, marginLeft: 3,marginRight:3 }}>
                        <InputLabel id="location-label">Location</InputLabel>
                        <Select
                            labelId="location-label"
                            id="location"
                            name="location"
                            autoComplete="Location"
                            autoFocus
                            value={formik.values.location}
                            onChange={formik.handleChange}
                        >
                            <MenuItem value="Kochi">Kochi</MenuItem>
                            <MenuItem value="Bangalore">Bangalore</MenuItem>
                            <MenuItem value="Kozhikode">Kozhikode</MenuItem>
                            <MenuItem value="Trivandrum">Trivandrum</MenuItem>
                            <MenuItem value="Kolkata">Kolkata</MenuItem>
                            <MenuItem value="Gurgaon">Gurgaon</MenuItem>
                            <MenuItem value="Delhi">Delhi</MenuItem>
                            <MenuItem value="Mumbai">Mumbai</MenuItem>
                            <MenuItem value="Gujarat">Gujarat</MenuItem>
                            <MenuItem value="Goa">Goa</MenuItem>
                        </Select>
                        {formik.touched.location && Boolean(formik.errors.location) && (
                            <FormHelperText>{formik.errors.location}</FormHelperText>
                        )}
                    </FormControl>




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
                        id="enddate"
                        label="End date"
                        name='enddate'
                        autoComplete=""
                        type='date'
                        autoFocus
                        value={formik.values.enddate}
                        onChange={formik.handleChange}
                        error={formik.touched.enddate && Boolean(formik.errors.enddate)}
                        helperText={formik.touched.enddate && formik.errors.enddate}

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
                    <Autocomplete
                        multiple
                        id="skills"
                        options={[
                            'JavaScript',
                            'React',
                            'Node.js',
                            'HTML',
                            'CSS',
                            'Python',
                        ]}
                        disableCloseOnSelect
                        getOptionLabel={(option) => option}
                        value={formik.values.skills}
                        onChange={(event, value) => formik.setFieldValue('skills', value)}
                        renderOption={(props, option, { selected }) => (
                            <li {...props}>
                                <Checkbox
                                    icon={icon}
                                    checkedIcon={checkedIcon}
                                    checked={selected}
                                />
                                {option}
                            </li>
                        )}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                margin="normal"
                                fullWidth
                                id="skills"
                                label="Skills"
                                name="skills"
                                autoComplete="skills"
                                autoFocus
                                value={formik.values.skills}
                                onChange={(event) => formik.setFieldValue('skills', event.target.value)}
                                error={formik.touched.skills && Boolean(formik.errors.skills)}
                                helperText={formik.touched.skills && formik.errors.skills}
                            />
                        )}
                    />



                </div>
                <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, height: 60, width: "60%", backgroundColor: '#131392', ml: 20 }} >
                    Submit
                </Button>


            </Box>
        </Box>

    )
}

export default Creationform