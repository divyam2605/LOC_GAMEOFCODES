import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import { makeStyles } from "@mui/styles";
import { useFormik } from "formik";
import "../styles/signupPage.css";
import { useNavigate } from "react-router-dom";
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

const useStyles = makeStyles((theme) => ({
  error: {
    display: "flex",
    color: theme.palette.error.main,
  },
}));
const Signup = () => {
  const classes = useStyles();
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      fname: "",
      lname: "",
      setPassword: "",
      confirmPassword: "",
      phone:"",
      category:"",
      

      
      
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Required")
        .email("Enter a valid email address"),
      fname: Yup.string()
        .max(30, "Exceeded maximum charecter length of 30")
        .required("Required"),
        lname: Yup.string()
        .max(30, "Exceeded maximum charecter length of 30")
        .required("Required"),
      setPassword: Yup.string()
        .required("Required")
        .min(8, "Minimum legth for password is 8")
        .max(16, "Exceeded maximum charecter length of 16"),
      confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("setPassword"), null], "password does not match"),
      phone: Yup.string()
        .min(10, "Minimum legth for phone is 10")
        .max(10, "Exceeded maximum charecter length of 10")
        .required("Required"),
       category: Yup.string()
       .required("Required"),
        

     
    }),
    onSubmit: (values) => {
      console.log(values);
      var axios = require("axios");
      navigate("/login");
      var data = JSON.stringify({
        user: {
          First_Name: values.fname,
          Last_Name: values.lname,
          password: values.setPassword,
          Confirm_Password: values.confirmPassword,
          Phone_Number: values.phone,
          email: values.email,
          Category:values.category,
        },
       
      });
    
      var config = {
        method: "post",
        url: "https://devacc3.pythonanywhere.com/accounts/interviewee_register/",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
    
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          navigate("/login");
        })
        .catch(function (error)
        {
          console.log(error);
        });
    },
  });

  return (
    <div className="outerDiv2ForSignup">
      <div className="innerDiv2">
        <div className="loginHeader">SIGNUP</div>
        <div className="userPass"> First Name:</div>
        <TextField
          variant="outlined"
          id="fname"
          name="fname"
          helperText={
            formik.touched.fname && formik.errors.fname
              ? formik.errors.fname
              : null
          }
          type="username"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.fname}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon sx={{color:"#333333"}}/>
              </InputAdornment>
            ),
          }}
        />
        <div className="userPass"> Last Name:</div>
        <TextField
          variant="outlined"
          id="lname"
          name="lname"
          helperText={
            formik.touched.lname && formik.errors.lname
              ? formik.errors.lname
              : null
          }
          type="username"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.lname}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon sx={{color:"#333333"}}/>
              </InputAdornment>
            ),
          }}
        />
        <div className="userPass" style={{marginTop:"10"}}>Email</div>
        <TextField
          variant="outlined"
          id="email"
          name="email"
          type="email"
          helperText={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : null
          }
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
          className={classes.field}
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
          id="phone"
          type="phone"
          name="phone"
          helperText={
            formik.touched.phone && formik.errors.phone
              ? formik.errors.phone
              : null
          }
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.phone}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <NumbersIcon sx={{color:"#333333"}}/>
              </InputAdornment>
            ),
          }}
        />

        

        <div className="userPass">Password</div>
        <TextField
          variant="outlined"
          id="setPassword"
          name="setPassword"
          helperText={
            formik.touched.setPassword && formik.errors.setPassword
              ? formik.errors.setPassword
              : null
          }
          type="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.setPassword}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <KeyIcon sx={{color:"#333333"}}/>
              </InputAdornment>
            ),
          }}
        />

        <div className="userPass"> Confirm Password</div>
        <TextField
          variant="outlined"
          id="confirmPassword"
          name="confirmPassword"
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
              ? formik.errors.confirmPassword
              : null
          }
          type="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <KeyIcon sx={{color:"#333333"}}/>
              </InputAdornment>
            ),
          }}
        />
        <div className="userPass">Candidate or Recruiter ?</div>
        {/* <FormControl fullWidth>
      {/* <InputLabel id="demo-simple-select-label">Category</InputLabel> */}
      {/* <Select
        
        id="category"
        value={formik.values.category}
        label="Category:"
     
      >
        <MenuItem value={"Candidate"}>Candidate</MenuItem>
        <MenuItem value={"Recruiter"}>Recruiter</MenuItem>
       
      </Select>
    </FormControl> */}

<TextField
          variant="outlined"
          id="category"
          name="category"
          helperText={
            formik.touched.category && formik.errors.category
              ? formik.errors.category
              : null
          }
          type="username"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.category}
          
        />
        <div className="dhaaText">
          <div className="dhaaText0">Sign Up with </div>
          <img src="https://img.icons8.com/color/48/null/google-logo.png" style={{height:27}}/> <img src="https://img.icons8.com/ios-filled/50/null/github.png"  style={{height:27,marginLeft:5}}/>
          <div className="dhaaText1">Already have an account?
            <Link to="/login" className="dhaaText2">
               <span style={{marginLeft:5}}>Login</span>
            </Link>
          </div>
        </div>
        
        <Button
          variant="contained"
          className="signBttn"
          onClick={formik.handleSubmit}
          sx={{backgroundColor:"#5154CE",
          }}
         
        >
          SIGN UP
        </Button>
      </div>
    </div>
  );
};

export default Signup;