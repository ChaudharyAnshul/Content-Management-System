import * as React from 'react';
import { useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { loginRequest } from '../../request/userRequest'
import { Navigate, useLocation  } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthProvider';
import {loginRequestDemo} from "../../request/userRequestDemo";
// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export const LoginIn = ( { handleOpenErrorModal } ) => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const loginValues = {
      email: data.get('email'),
      password: data.get('password'),
    }
    const loginSuccess = loginRequestDemo(loginValues);
    
    loginSuccess.then((res)=>{
      setAuth({email:res.email,firstName:res.firstName,userRole:res.userRole});
      navigate('/dashboard');
      // <Navigate to="/dashboard" state={{from:location}} replace/>
    }).catch(err=>{
      console.log(err);
    })
   
    // if(loginSuccess){
    //   navigate("/dashboard")
    // }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
                <Grid item>
                    <Link href="/signup" variant="body2">
                    create new account? Sign up
                    </Link>
                </Grid>
                </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}