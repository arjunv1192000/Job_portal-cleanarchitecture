import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import validationSchema from "./validation/Registervalidation";
import axios from "../../axios/axios";



interface FormValues {
    companyname:string,
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
}

export default function SignIn() {

    const navigate=useNavigate();


    const formik = useFormik({
        initialValues: {
            companyname:'',
            name: '',
            email: '',
            password: '',
            confirmPassword: '',

        } as FormValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);



            const body = {
                companyname:values.companyname,
                name: values.name,
                email: values.email,
                password: values.password,
                confirmPassword: values.confirmPassword,
            };
            axios.post("/api/v1/recruiter/signup", body).then((response) => {
                if (response.data.status == true) {

                    navigate("/")

                } else {
                    toast.error(response.data.message)
                    setTimeout(()=>{
                        navigate("/recruiter/login")

                    },1500)

                }


            }).catch((response) => {
                console.error(response.message,);

               

            })

        },

    });
    

    return (
        <Container component="main" maxWidth="md">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                 <Box
                    component="img"
                    sx={{
                        height: 233,
                        width: 350, marginLeft: 80,
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 350, md: 250 },
                    }}
                    alt=""
                    src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/login-register/img-4.svg"
                />
                  <Typography component="h1" variant="h5" sx={{ fontSize: 12, fontWeight: 500,color:"blue",marginBottom:4 }}>
                    Register
                </Typography>
                <Typography component="h1" variant="h5">
                Registration for Recruiters
                </Typography>
               
                <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{paddingLeft:30 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="companyname"
                        label="companyname"
                        name="companyname"
                        autoComplete="companyname"
                        autoFocus
                        value={formik.values.companyname}
                        onChange={formik.handleChange}
                        error={formik.touched.companyname && Boolean(formik.errors.companyname)}
                        helperText={formik.touched.companyname && formik.errors.companyname}
                        sx={{width:"60%",}}
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
                        sx={{width:"60%"}}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                        sx={{width:"60%"}}
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        autoComplete="current-password"
                        sx={{width:"60%"}}
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
                        sx={{width:"60%"}}
                    />

                    <Button type="submit"  variant="contained" sx={{ mt: 3, mb: 2, height: 60,width:"60%" ,backgroundColor:'#131392', }} >
                        Submit&Register
                    </Button>
                    <Grid container paddingLeft={9}>

                        <Link href="#" variant="body2" onClick={() => navigate('/recruiter/login')}>
                            {"Already have an account?Login"}
                        </Link>

                    </Grid>
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
             <Toaster
                position="top-center"
                reverseOrder={false}
            />
            
        </Container>
    );
}