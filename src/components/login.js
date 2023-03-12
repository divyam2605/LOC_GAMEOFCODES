import React from "react";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import axios from "axios";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
const useStyles = makeStyles((theme) => ({
  error: {
    display: "flex",
    color: theme.palette.error.main,
  },
  link: {
    textDecoration: "none!important",
    color: "#ffffff",
  },
}));
const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {

      var axios = require('axios');
      var data = JSON.stringify({
        "email": values.email,
        "password": values.password
      });

      var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:8000/signin',
        headers: { 
          'Content-Type': 'application/json'
        },
        data: data
      };

      axios(config)
        .then(function(response){
          console.log(response.data);
          if (response.data.token) {
                  if (response.data.is_recruiter) {
                    console.log("Recruiter")`     `
                    navigate('/profilec')
                  }
                  else {
                    localStorage.setItem("email", formik.values.email);
                    console.log("Candidate")
                    navigate('/profiler')
                  }
                } 
          else {
                  navigate("/signup");
                  alert("Invalid cred");
                }
                localStorage.setItem("token", response.data.token);
              })
              .catch(function (error) {
                console.log(error);
              });


     
    },
  });

  return (
    <div className="outerDiv2ForLogin" style={{paddingLeft:0}}>
      <div className="innerDiv2">
        <div className="loginHeader">LOGIN</div>
        <div className="userPass"> Email</div>
        <TextField
          sx={{width:"15em"}}
          id="email"
          name="email"
          type="email"
          helperText={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : null
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          variant="outlined"
          className="smallfield"
          InputProps={{
            startAdornment: <InputAdornment position="start"><EmailIcon></EmailIcon></InputAdornment>,
          }}
        />

        <div className="userPass">Password</div>
        <TextField
          variant="outlined"
          className="smallfield"
          id="password"
          sx={{width:"15em"}}
          helperText={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : null
          }
          name="password"
          type="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
          InputProps={{
            startAdornment: <InputAdornment position="start"><KeyIcon></KeyIcon></InputAdornment>,
          }}
        />

        <div className="dhaaText" style={{width:"15em"}}>
          <div className="dhaaText1">Don't have an account?</div>
          <div>
            <Link to="/signup" className="dhaaText2">
              Sign Up
            </Link>
          </div>
        </div>
        <Button
          className="signBttn"
          variant="contained"
          type="submit"
          sx={{width:'10em', ml:6.5,mt:2}}
          onClick={formik.handleSubmit}
        >
          SIGN IN
        </Button>
      </div>
    </div>
  );
};

export default Login;
