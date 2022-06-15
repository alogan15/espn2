import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme();




export default function PageLayout() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

 
    
  return (
    <ThemeProvider theme={theme}>
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
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >

            <Typography component="h1" variant="h5">
              ESPN
            </Typography>
            <Typography component="h1" variant="h6">
              Create Account
              <hr></hr>
            </Typography>
           
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="firstName"
                autoFocus
              />
              
              <TextField
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lastName"
                autoFocus
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
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Show Password"
              />

                <hr></hr>  
                <Typography>           
              <p>Please send me occasional information and offers about my favorite teams, sports and other information from:</p>
 
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked/>} label= "ESPN, ESPN+ and The Walt Disney Family of Companies"  />
              </FormGroup>
              
            <hr></hr>              
                <p>By creating an account, I agree to the <Link>Terms of Use</Link> and acknowledge that I have read the <Link>Privacy Policy</Link> and <Link>California Privacy Notice</Link>.</p>
                <hr></hr> 
                <p>My home country/region: United States. <Link>Change</Link>.</p>
                </Typography>          
              <Button
                type="submit"
                fullWidth
                style={{ borderRadius: 100 }}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs> 
                </Grid>
                <Grid item container justify = "right">
                Already have an account? <Link>Log In</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Box>
      </Container>
    </ThemeProvider>
  );
}

