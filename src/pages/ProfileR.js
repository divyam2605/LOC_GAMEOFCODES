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

const handleUpload =() => {
    alert("File uploaded")
        };


function ProfileR() {
    let navigate = useNavigate();
  return (
    <>
    <Grid sx={{
       
        backgroundImage:"linear-gradient(to right, rgb(255,255,255), rgb(174,198,207))" ,
    height:"100vh"}}>
      
    <Nav/>
    <Chat/>
    {/* <img src={Background} style={{height:"100vh",width:"100vh"}}></img> */}

    <Grid sx={{display:'flex',flexDirection:'row',marginTop:15}}>
        <Grid>
        <MDBContainer fluid>
<MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
  <MDBCardBody>
    <MDBRow>
      <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

        <h1 classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{marginTop: '1em',marginBottom: '1.5em'}}>Profile:</h1>
        <div class="d-flex align-items-start">
        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="envelope me-3" size='lg'/>
          <MDBInput label='Company name' id='form1' type='text'/>
        </div>
        <div className="d-flex flex-row align-items-center mb-4 ">
          <MDBIcon fas icon="user me-3" size='lg'/>
          <MDBInput label='Email' id='form2' type='email' className='w-100'/>
        </div>

       
        </div>

        {/* <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="lock me-3" size='lg'/>
          <MDBInput label='Gender' id='form3' type='gender'/>
        </div> */}
       

        <div class="d-flex align-items-start">
      <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="envelope me-3" size='lg'/>
          <MDBInput label='Location' id='form3' type='text' placeholder='XX years'/>
        </div>
        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="envelope me-3" size='lg'/>
          <MDBInput label='Company Phone No' id='form4' type='text'/>
        </div>
        </div>

        <div class="d-flex align-items-start">
        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="envelope me-3" size='lg'/>
          <MDBInput label='Sector' id='form5' type='text' placeholder='IT'/>
        </div>
        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="envelope me-3" size='lg'/>
          <MDBInput label='URL' id='form5' type='text' placeholder='Company URL'/>
        </div>
      
      

      
        </div>

 
            <Button type="submit" onClick={()=>{navigate('/candidate')}} style={{width:"15em",backgroundColor: "#5D3FD3",
            borderRadius: "5px", color:'white' ,
            "&:hover": {
              backgroundColor: "white",
              color: "#5D3FD3",
              boxShadow: 5,
            },}}>Save Changes</Button>

            
            
     
            

        
        {/* <MDBBtn className='mb-4' size='lg'>Register</MDBBtn> */}

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
