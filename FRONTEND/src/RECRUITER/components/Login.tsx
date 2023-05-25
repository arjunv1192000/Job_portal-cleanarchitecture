import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import GoogleIcon from '@mui/icons-material/Google';
import { Stack } from "@mui/material";
import Divider from '@mui/material/Divider';
import { useNavigate } from "react-router-dom";

export default function SignIn() {
    //   const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     console.log({
    //       email: data.get("email"),
    //       password: data.get("password"),
    //     });
    //   };
    const navigate=useNavigate();

    return (
        <Container component="main" maxWidth="md"   >
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
                    Welcome back!
                </Typography>
                <Typography component="h1" variant="h5" sx={{ fontSize: 24, fontWeight: 1000 }}>
                Recruiters  Login
                </Typography>
                <Button variant="outlined" startIcon={<GoogleIcon />} sx={{ mt: 3, mb: 2, height: 50, width: "59%", color: "black", outlineColor: "black" }} >
                    Login  With Google
                </Button>
              
                <Divider >Or Continue with</Divider>
                <Box component="form" noValidate sx={{ mt: 5 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
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
                    />

                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 5, mb: 2, height: 60, backgroundColor: '#131392' }}onClick={() => navigate('/recruiter/dashboard')} >
                        Login
                    </Button>
                    <Grid container justifyContent="space-around"
                        alignItems="center">

                        <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>

                    </Grid>
                </Box>
            </Box>
            <Box
                component="img"
                sx={{
                    height: 250,
                    width: 350,
                    maxHeight: { xs: 250, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                }}
                alt=""
                src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/login-register/img-3.svg"
            />

        </Container>
    );
}