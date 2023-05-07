import React from 'react'
import Nav from '../components/Nav'
import Chat from "../components/Chat";
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useState,useEffect } from 'react'
import {Card,Grid,Button} from '@mui/material';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import { render } from '@testing-library/react';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Candidate = (props) => {
  const[MyData,SetMyData]=useState([]);

  useEffect(()=>
  {
     fetchdata()  
  },[])

  const fetchdata= async()=>{
       let url='http://127.0.0.1:8000/candidateprofile/38'
       let data= await fetch(url)
       let parsedData= await data.json();
       SetMyData(parsedData);
       console.log(SetMyData);
  }

  return (
    <div>
        <Nav/>
        {/* <Chat/> */}
        <Grid container lg={12} sx={{backgroundColor:"black"}} >
        {      
            MyData.map((values,index)=>
            {
              return(

              <Grid key= {values.fields.User_email} item className="vh-100" xs={12} md={12} lg={6} style={{ backgroundColor: '#f4f5f7' }} >
              <MDBContainer className="py-5 h-100" style={{width:'100vw',height:'100vh', marginLeft:'5em'}}>
                <MDBRow >
                  <MDBCol lg="6" className="mb-4 mb-lg-0">
                    <MDBCard className="mb-3" style={{ borderRadius:'.5rem' }}>
                      <MDBRow className="g-0">
                        <MDBCol md="4" className="gradient-custom text-center text-white"
                          style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem',backgroundColor:"#779ecb" }}>
                          <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                            alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                          <MDBTypography tag="h5">Marie Horwitz</MDBTypography>
                          <MDBCardText>{values.fields.Skills}</MDBCardText>
                          <MDBCardText>{values.fields.Gender}</MDBCardText>
                          <MDBIcon far icon="edit mb-5" />
                        </MDBCol>
                        <MDBCol md="8">
                          <MDBCardBody className="p-4">
                            <MDBTypography tag="h6">Information</MDBTypography>
                            <hr className="mt-0 mb-4" />
                            <MDBRow className="pt-1">
                              <MDBCol size="6" className="mb-3">
                                <MDBTypography tag="h6">Email</MDBTypography>
                                <MDBCardText className="text-muted">mari@gmail.com</MDBCardText>
                              </MDBCol>
                              <MDBCol size="6" className="mb-3">
                                <MDBTypography tag="h6">DOB</MDBTypography>
                                <MDBCardText className="text-muted">{values.fields.Date_of_birth}</MDBCardText>
                              </MDBCol>
                            </MDBRow>
                            <MDBTypography tag="h6">Information</MDBTypography>
                            <hr className="mt-0 mb-4" />
                            <MDBRow className="pt-1">
                              <MDBCol size="6" className="mb-3">
                                <MDBTypography tag="h6">Years of Exp</MDBTypography>
                                <MDBCardText style={{color:"#5D3FD3",fontSize:"1.2em"}}>{values.fields.Years_of_Experience}</MDBCardText>
                              </MDBCol>
                              <MDBCol size="6" className="mb-3">
                                <MDBTypography tag="h6" >Expected Salary</MDBTypography>
                                <MDBCardText style={{color:"blue",fontSize:"1.2em"}}><CurrencyRupeeIcon/>{values.fields.Expected_Salary}</MDBCardText>
                              </MDBCol>
                            </MDBRow>
                            <a href="http://africau.edu/images/default/sample.pdf" target='_blank'><Button variant="outlined">Resume</Button></a>
                            <a href="" target='_blank'><Button variant="outlined">Interview</Button></a>
                            {/* <div className="d-flex justify-content-start">
                               <object data="http://africau.edu/images/default/sample.pdf" type="application/pdf" width="100%" height="100%">
                                  <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
                              </object>
                            </div> */}
                          </MDBCardBody>
                        </MDBCol>
                      </MDBRow>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </Grid>
            
              )
              
            })
            
        }
        
        <Grid  item className="vh-100" xs={12} md={12} lg={6} style={{ backgroundColor: '#f4f5f7' }} >
              <MDBContainer className="py-5 h-100" style={{width:'100vw',height:'100vh', marginLeft:'5em'}}>
                <MDBRow >
                  <MDBCol lg="6" className="mb-4 mb-lg-0">
                    <MDBCard className="mb-3" style={{ borderRadius:'.5rem' }}>
                      <MDBRow className="g-0">
                        <MDBCol md="4" className="gradient-custom text-center text-white"
                          style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem',backgroundColor:"#779ecb" }}>
                          <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                            alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                          <MDBTypography tag="h5">Jacob Holmes</MDBTypography>
                          <MDBCardText>Node JS</MDBCardText>
                          <MDBCardText>Male</MDBCardText>
                          <MDBIcon far icon="edit mb-5" />
                        </MDBCol>
                        <MDBCol md="8">
                          <MDBCardBody className="p-4">
                            <MDBTypography tag="h6">Information</MDBTypography>
                            <hr className="mt-0 mb-4" />
                            <MDBRow className="pt-1">
                              <MDBCol size="6" className="mb-3">
                                <MDBTypography tag="h6">Email</MDBTypography>
                                <MDBCardText className="text-muted">jh15@gmail.com</MDBCardText>
                              </MDBCol>
                              <MDBCol size="6" className="mb-3">
                                <MDBTypography tag="h6">DOB</MDBTypography>
                                <MDBCardText className="text-muted">1999-12-13</MDBCardText>
                              </MDBCol>
                            </MDBRow>
                            <MDBTypography tag="h6">Information</MDBTypography>
                            <hr className="mt-0 mb-4" />
                            <MDBRow className="pt-1">
                              <MDBCol size="6" className="mb-3">
                                <MDBTypography tag="h6">Years of Exp</MDBTypography>
                                <MDBCardText style={{color:"#5D3FD3",fontSize:"1.2em"}}>9+</MDBCardText>
                              </MDBCol>
                              <MDBCol size="6" className="mb-3">
                                <MDBTypography tag="h6" >Expected Salary</MDBTypography>
                                <MDBCardText style={{color:"blue",fontSize:"1.2em"}}><CurrencyRupeeIcon/>10K+</MDBCardText>
                              </MDBCol>
                            </MDBRow>
                            <a href="http://africau.edu/images/default/sample.pdf" target='_blank'><Button variant="outlined">Resume</Button></a>
                            <a href="" target='_blank'><Button variant="outlined">Interview</Button></a>
                            {/* <div className="d-flex justify-content-start">
                               <object data="http://africau.edu/images/default/sample.pdf" type="application/pdf" width="100%" height="100%">
                                  <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
                              </object>
                            </div> */}
                          </MDBCardBody>
                        </MDBCol>
                      </MDBRow>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </Grid>
        </Grid>
    </div>
  )
}

export default Candidate
