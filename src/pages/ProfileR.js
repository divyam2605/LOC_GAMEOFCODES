import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
  MDBDropdown,
  MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem,

}
from 'mdb-react-ui-kit';
import Chat from "../components/Chat";

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import Grid from '@mui/system/Unstable_Grid/Grid';
import Side from '../components/Side';
import Nav from '../components/Nav';
import { useNavigate } from "react-router-dom";
import Background from '../images/Background.jpg'
import { useFormik } from "formik";
import * as Yup from "yup";


import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import "../styles/signupPage.css";
// import axios from "axios";
import { Link } from "react-router-dom";
//icons:
import InputAdornment from '@mui/material/InputAdornment';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import PersonIcon from '@mui/icons-material/Person';
import NumbersIcon from '@mui/icons-material/Numbers';
import SchoolIcon from '@mui/icons-material/School';
import KeyIcon from '@mui/icons-material/Key';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const handleUpload =() => {
    alert("File uploaded")
        };



    const ProfileR = () => {
      let navigate = useNavigate();
      const formik = useFormik({
        initialValues: {
          Recruiter_email: "",
          Company_name: "",
          Location: "",
          Sector: "",
          Company_Phone_Number: "",
          Company_Link:"",
          
          
        },
        
        onSubmit: (values) => {
          console.log(values);
          var axios = require("axios");
          navigate("/login");
          var data = JSON.stringify({
              Recruiter_email: values.Recruiter_email,
              Company_name: values.Company_name,
              Location: values.Location,
              Sector: values.Sector,
              Company_Phone_Number: values.Company_Phone_Number,
              Company_Link: values.Company_Link,
          });
    
        
          var config = {
            method: "POST",
            url: "http://127.0.0.1:8000/recruiter/",
            headers: {
              "Content-Type": "application/json",
            },
            data: data,
          };
        
          axios(config)
            .then(function (response) {
              console.log(JSON.stringify(response.data));
            })
            .catch(function (error)
            {
              console.log(error);
            });
        },
      });

  return (
    <>
    <Grid sx={{
       
        backgroundImage:"linear-gradient(to right, rgb(255,255,255), rgb(174,198,207))" ,
        height:"130vh"}}>
      
    <Nav/>
    <Chat/>
    {/* <img src={Background} style={{height:"100vh",width:"100vh"}}></img> */}

    <Grid sx={{display:'flex',flexDirection:'row',marginTop:0,paddingLeft:0}}>
        <Grid>
        <MDBContainer fluid>
<MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
  <MDBCardBody>
    <MDBRow>
      <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

      <div className="outerDiv2ForSignup">
      <div className="innerDiv2" >
        <div className="loginHeader" >COMPANY DETAILS</div>
        <br />
        <div className="userPass"> Company Name </div>
        <TextField
          variant="outlined"
          id="Company_name"
          name="Company_name"
          helperText={
            formik.touched.Company_name && formik.errors.Company_name
              ? formik.errors.Company_name
              : null
          }
          type="username"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.Company_name}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon sx={{color:"#333333"}}/>
              </InputAdornment>
            ),
          }}
        />
        
        <div className="userPass" style={{marginTop:"10"}}>Recruiter_email</div>
        <TextField
          variant="outlined"
          id="Recruiter_email"
          name="Recruiter_email"
          type="Recruiter_email"
          helperText={
            formik.touched.Recruiter_email && formik.errors.Recruiter_email
              ? formik.errors.Recruiter_email
              : null
          }
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.Recruiter_email}
          
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AttachEmailIcon sx={{color:"#333333"}}/>
              </InputAdornment>
            ),
          }}
        />

        

        <div className="userPass"> Phone No:</div>
        <TextField
          variant="outlined"
          id="Company_Phone_Number"
          type="Company_Phone_Number"
          name="Company_Phone_Number"
          helperText={
            formik.touched.Company_Phone_Number && formik.errors.Company_Phone_Number
              ? formik.errors.Company_Phone_Number
              : null
          }
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.Company_Phone_Number}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <NumbersIcon sx={{color:"#333333"}}/>
              </InputAdornment>
            ),
          }}
        />

<div className="userPass"> Location </div>
        <TextField
          variant="outlined"
          id="Location"
          name="Location"
          helperText={
            formik.touched.Location && formik.errors.Location
              ? formik.errors.Location
              : null
          }
          type="username"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.Location}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon sx={{color:"#333333"}}/>
              </InputAdornment>
            ),
          }}
        />

<div className="userPass"> Sector </div>
        <TextField
          variant="outlined"
          id="Sector"
          name="Sector"
          helperText={
            formik.touched.Sector && formik.errors.Sector
              ? formik.errors.Sector
              : null
          }
          type="username"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.Sector}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon sx={{color:"#333333"}}/>
              </InputAdornment>
            ),
          }}
        />

<div className="userPass"> Company Link </div>
        <TextField
          variant="outlined"
          id="Company_Link"
          name="Company_Link"
          helperText={
            formik.touched.Company_Link && formik.errors.Company_Link
              ? formik.errors.Company_Link
              : null
          }
          type="username"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.Company_Link}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon sx={{color:"#333333"}}/>
              </InputAdornment>
            ),
          }}
        />

        
        
        <Button
          variant="contained"
          className="signBttn"
          onClick={formik.handleSubmit}
          sx={{backgroundColor:"#5154CE",
          }}
         
        >
          SAVE CHANGES
        </Button>
      </div>
    </div>

      </MDBCol>

      <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
      </MDBCol>

    </MDBRow>
  </MDBCardBody>
</MDBCard>
</MDBContainer>
        </Grid>
    </Grid>
    </Grid>
    </>
    
  );
}

export default ProfileR;
