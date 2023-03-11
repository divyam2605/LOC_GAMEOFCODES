import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import SignupPage from "./signupPage";


import x from "../images/feature_1.png";
import y from "../images/feature_2.png";
import '../styles/landing.css';
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function LandingPage() {
  return (
    <>
     <Grid xs={12} lg={12}  sx={{ width: "100%", backgroundColor: 'lightblue'}}>
      <Grid
        container
        sx={{ backgroundColor: "lightblue" }}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item sx={{ mt: 25 }} md={6} xs={12} lg={6} >
          <Box className='grid' 
          >
            <Box style={{ marginLeft: 80 }}>
              <h1 style={{ fontSize: '3em', color: "#05264E" }}>
                Find Jobs,
                <br />
                Hire Creatives
              </h1>
              <div
                style={{ fontSize: "1em", alignItems: "left" }}
                data-wow-delay=".1s"
              >
                Each month, more than 3 million job seekers turn to website{" "}
                <br />
                in their search for work, making over 140,000 applications every
                single day.
              </div>
              <Link to='/signup'>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  width: "30%",
                  backgroundColor: "#5D3FD3",
                  mt: 5,
                  borderRadius: "5px",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "#5D3FD3",
                    boxShadow: 5,
                  },
                }}
              >
                <strong>Get Started </strong>
              </Button>
              </Link>
              
              <div style={{ marginTop: 10, fontSize: "1em" }}>
                Have you already registered?
                <Link to='/login'><strong> Login</strong></Link>
              </div>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6} className='landing'>
          <Grid sx={{ float: "left", mt: 7 }}>
            <img
              src={x}
              style={{
                width: "21vw",
              }}
            />
          </Grid>
          <Grid sx={{ mt: 25 }}>
            <img
              src={y}
              style={{
                width: "21vw",
                
              }}
            />
          </Grid>
        </Grid>
      </Grid>

    

     
    </Grid>

   
    <Grid xs={12}llg={12} sx={{
   
   m:3
    
   
   }}>
    <Paper elevation={5} 
    sx={{borderRadius: 5}}
    >
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mb:20}}>
        <Grid item lg={3} xs={6} >
        <h1 style={{color:'blue',fontSize:"55px"}}><span>25</span><span>K+</span></h1>
        <h5 style={{fontSize:"20px"}}> Completed Cases</h5>
        <p >We always provide people a <br class="d-none d-lg-block"/>complete solution upon focused of<br class="d-none d-lg-block"/> any business</p>

        </Grid>
        <Grid item lg={3} xs={6}>
        <h1 style={{color:'blue',fontSize:"55px"}}><span>17</span><span>+</span></h1>
        <h5 style={{fontSize:"20px"}}> Our Office</h5>
        <p >We always provide people a <br class="d-none d-lg-block"/>complete solution upon focused of<br class="d-none d-lg-block"/> any business</p>
        </Grid>
        <Grid item lg={3} xs={6}>
        <h1 style={{color:'blue',fontSize:"55px"}}><span>86</span><span>+</span></h1>
        <h5 style={{fontSize:"20px"}}> Skilled People</h5>
        <p >We always provide people a <br class="d-none d-lg-block"/>complete solution upon focused of<br class="d-none d-lg-block"/> any business</p>
        </Grid>
        <Grid item lg={3} xs={6}>
        <h1 style={{color:'blue',fontSize:"55px"}}><span>7</span><span>K+</span></h1>
        <h5 style={{fontSize:"20px"}}> Happy Employees</h5>
        <p >We always provide people a <br class="d-none d-lg-block"/>complete solution upon focused of<br class="d-none d-lg-block"/> any business</p>
        </Grid>
    </Grid>
    </Paper>
   </Grid>

   <Grid xs={12} lg={12} sx={{m:3}}>
    <Typography sx={{fontWeight:'bold', fontSize: '2em'}}>How It Works</Typography>
    <Typography sx={{fontSize: '1.5em', color:'darkgray'}}>Just via some simple steps, you will find the ideal candidate you are looking for!</Typography>
   <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mb:20, mt:10}}>

        <Grid item xs={12} lg={4}>
            <h1 style={{backgroundColor: 'lightblue', borderRadius: '50%', width: '3em', height:'3em',lineHeight:'3em',marginLeft:"40%", color:'#5D3FD3'}}> 1</h1>
            <h4 style={{ fontSize:'1.5em'}}>Register an account to start</h4>
            
        </Grid>

        <Grid item xs={12} lg={4} >
            <h1 style={{backgroundColor: 'lightblue', borderRadius: '50%', width: '3em', height:'3em',lineHeight:'3em', marginLeft:'40%', color:'#5D3FD3'}}> 2</h1>
            <h4 style={{ fontSize:'1.5em'}}>Explore over thousands of resumes</h4>
            
        </Grid>
        <Grid item xs={12} lg={4}>
            <h1 style={{backgroundColor: 'lightblue', borderRadius: '50%', width: '3em', height:'3em',lineHeight:'3em', marginLeft:"40%", color:'#5D3FD3'}}> 3</h1>
            <h4 style={{fontSize:'1.5em'}}>Find the most suitable candidate</h4>
            
        </Grid>

    </Grid>
    </Grid>
    
    
    </>
   
  );
}
