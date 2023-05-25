
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from "../../axios/axios";
import { useNavigate } from "react-router-dom";
import validationSchema from '../../USER/components/validation/Registervalidation';




interface FormValues {
    name: string;
    password: string;
    email: string;
    phone: string;
    confirmPassword:string;
}

function SignIn() {

    const [error, setError] = useState(null)
    const navigate = useNavigate();



    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword:'',

        } as FormValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
           


            const body= {
                name: values.name,
                email: values.email,
                phone: values.phone,
                password: values.password,
                confirmPassword: values.confirmPassword,
            };
            axios.post("/userauth",body).then(() => {
                console.log("sucess");
                navigate('/')


            }).catch((err) => {
                console.error(err);
                setError(err.response.data.error)
            })

        },

    });

    return (
        <Container component="main" maxWidth="md">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box
                    component="img"
                    sx={{
                        height: 233,
                        width: 350,
                        marginLeft: 80,
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 350, md: 250 },
                    }}
                    alt=""
                    src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/login-register/img-4.svg"
                />
                <Typography
                    component="h1"
                    variant="h5"
                    sx={{ fontSize: 12, fontWeight: 500, color: 'blue', marginBottom: 4 }}
                >
                    Register
                </Typography>
                <Typography component="h1" variant="h5">
                    Start for free Today
                </Typography>

                <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ paddingLeft: 30 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                        sx={{ width: '60%' }}
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        sx={{ width: "60%" }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="phone"
                        label="phone"
                        name="phone"
                        autoComplete="phone"
                        autoFocus
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                        helperText={formik.touched.phone && formik.errors.phone}
                        sx={{ width: "60%" }}
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        sx={{ width: "60%" }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="confirmPassword"
                        label="confirmPassword"
                        name="confirmPassword"
                        autoComplete="confirmPassword"
                        autoFocus
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                        sx={{ width: "60%" }}
                    />


                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2, height: 60, width: '60%', backgroundColor: '#131392' }}
                    >
                        Submit & Register
                    </Button>
                    
                </Box>
            </Box>
            <Box
                component="img"
                sx={{
                    height: 350,
                    width: 700,
                    maxHeight: { xs: 350, md: 250 },
                    maxWidth: { xs: 450, md: 350 },
                }}
                alt=""
                src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/login-register/img-2.svg"
            />
        </Container>
    );
}

export default SignIn;
