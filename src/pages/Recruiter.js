import React from 'react'
import Nav from '../components/Nav'
import Chat from "../components/Chat";
import axios from 'axios'
import { useState,useEffect } from 'react'
import {Button, Card,Grid} from '@mui/material';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import { render } from '@testing-library/react';

import WorkIcon from '@mui/icons-material/Work';

const Recruiter = (props) => {
  const[MyData,SetMyData]=useState([]);

  useEffect(()=>
  {
     fetchdata()  
  },[])

  const fetchdata= async()=>{
       let url='http://127.0.0.1:8000/recruiterprofile'
       let data= await fetch(url)
       let parsedData= await data.json();
       SetMyData(parsedData);
       console.log(SetMyData);
  }

  return (
    <div>
        <Nav/>
        <Chat/>
        <Grid container >
        {      
            MyData.map((values,index)=>
            {
              return(

              <Grid key= {values.fields.Recruiter_email} item className="vh-100" xs={12} md={6} lg={6} style={{ backgroundColor: '#f4f5f7' }} >
              <MDBContainer className="py-5 h-100" style={{ width:'80vw',height:'80vh',marginLeft:'5em'}}>
                <MDBRow >
                  <MDBCol lg="6" className="mb-4 mb-lg-0">
                    <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                      <MDBRow className="g-0">
                        <MDBCol md="4" className="gradient-custom text-center text-white"
                          style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem',backgroundColor:"#779ecb" }}>
                          {/* <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                            alt="Avatar" className="my-5" style={{ width: '80px' }} fluid /> */}
                           <div style={{marginTop:'5em',marginBottom:'2em'}}>
                           <WorkIcon />
                           </div> 
                          <MDBTypography tag="h5">{values.fields.Company_name}</MDBTypography>
                          <MDBCardText>{values.fields.Sector}</MDBCardText>
                          <MDBCardText>{values.fields.Location}</MDBCardText>
                          <MDBIcon far icon="edit mb-5" />
                        </MDBCol>
                        <MDBCol md="8">
                          <MDBCardBody className="p-4">
                            <MDBTypography tag="h6">Information</MDBTypography>
                            <hr className="mt-0 mb-4" />
                            <MDBRow className="pt-1">
                              <MDBCol size="6" className="mb-3">
                                <MDBTypography tag="h6">Email</MDBTypography>
                                <MDBCardText className="text-muted">{values.fields.Recruiter_email}</MDBCardText>
                              </MDBCol>
                              <MDBCol size="6" className="mb-3">
                                <MDBTypography tag="h6">Phone</MDBTypography>
                                <MDBCardText className="text-muted">{values.fields.Company_Phone_Number}</MDBCardText>
                              </MDBCol>
                            </MDBRow>
                            
                            <hr className="mt-0 mb-4" />
                            <MDBRow className="pt-1">
                              <MDBCol size="12" className="mb-3">
                                <MDBTypography tag="h6">Company Link</MDBTypography>
                                <MDBCardText className="text-muted">{values.fields.Company_link}</MDBCardText>
                              </MDBCol>
                              
                            </MDBRow>
                            <Button>Apply Now</Button>
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
        </Grid>
    </div>
  )
}

export default Recruiter
