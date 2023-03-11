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
import { useNavigate } from "react-router-dom";
import Chat from "../components/Chat";

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import Grid from '@mui/system/Unstable_Grid/Grid';
import Side from '../components/Side';
import Nav1 from '../components/Nav1';

import EmailIcon from '@mui/icons-material/Email';
import DateRangeIcon from '@mui/icons-material/DateRange';
import WorkIcon from '@mui/icons-material/Work';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


const handleUpload =() => {
    alert("File uploaded")
        };


function ProfileC() {
    let navigate = useNavigate();
  return (
    <>
    <Grid sx={{
       
       backgroundImage:"linear-gradient(to right, rgb(255,255,255), rgb(174,198,207))" ,
   height:"100vh"}}>
    <Nav1/>
    <Chat/>
    
    <Grid sx={{display:'flex',flexDirection:'row'}}>

        <Grid>
            {/* <Side/> */}
        </Grid>

        <Grid>

        <MDBContainer fluid>

<MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
  <MDBCardBody>
    <MDBRow>
      <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

        <h1 classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{marginTop: '1em',marginBottom: '1.5em'}}>Profile:</h1>
        <div class="d-flex align-items-start">
        <div className="d-flex flex-row align-items-center mb-4 ">
          {/* <MDBIcon fas icon="user me-3" size='lg'/> */}
          <EmailIcon/>
          <MDBInput label='Email' id='form1' type='email' className='w-100'/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4" style={{marginLeft:'1em'}}>
          <DateRangeIcon/>
          <MDBInput label='yyyy-mm-dd' id='form2' type='text'/>
        </div>
        </div>

        {/* <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="lock me-3" size='lg'/>
          <MDBInput label='Gender' id='form3' type='gender'/>
        </div> */}
       

        <div class="d-flex align-items-start">
      <div className="d-flex flex-row align-items-center mb-4">
         <WorkIcon/>
          <MDBInput label='yrs of experience' id='form2' type='text' placeholder='XX years'/>
        </div>
        <div className="d-flex flex-row align-items-center mb-4 " style={{marginLeft:'1em'}}>
          <AttachMoneyIcon/>
          <MDBInput label='Expected salary' id='form2' type='text'/>
        </div>
        </div>

        <div class="d-flex align-items-start">
       <div className="d-flex flex-row align-items-center mb-4 ">
       <MDBDropdown className='btn-group'>
      <MDBBtn style={{backgroundColor:"white",color:"black"}}>Gender</MDBBtn>
      <MDBDropdownToggle split></MDBDropdownToggle>
      <MDBDropdownMenu>
          <MDBDropdownItem link>Male</MDBDropdownItem>
          <MDBDropdownItem link>Female</MDBDropdownItem>
          <MDBDropdownItem link>Other</MDBDropdownItem>
      </MDBDropdownMenu>
      </MDBDropdown>
      </div> 
      <div className="d-flex flex-row align-items-center mb-4 ">
       <MDBDropdown className='btn-group' style={{marginLeft: '1em'}}>
      <MDBBtn style={{backgroundColor:"white",color:"black"}}>Qualifications</MDBBtn>
      <MDBDropdownToggle split></MDBDropdownToggle>
      <MDBDropdownMenu>
          <MDBDropdownItem link>Graduation</MDBDropdownItem>
          <MDBDropdownItem link>Senior Secondary(XII)</MDBDropdownItem>
          <MDBDropdownItem link>Secondary(X)</MDBDropdownItem>
          <MDBDropdownItem link>Diploma</MDBDropdownItem>
          <MDBDropdownItem link>Post Graduation</MDBDropdownItem>
          <MDBDropdownItem link>PHD</MDBDropdownItem>
      </MDBDropdownMenu>
      </MDBDropdown>
      </div> 
      

      <div className="d-flex flex-row align-items-center mb-4 ">
       <MDBDropdown className='btn-group' style={{marginLeft: '1em'}}>
      <MDBBtn style={{backgroundColor:"white",color:"black"}}>Skills</MDBBtn>
      <MDBDropdownToggle split></MDBDropdownToggle>
      <MDBDropdownMenu>
          <MDBDropdownItem link>Frontend</MDBDropdownItem>
          <MDBDropdownItem link>Backend</MDBDropdownItem>
          <MDBDropdownItem link>Marketing</MDBDropdownItem>
          <MDBDropdownItem link>CA</MDBDropdownItem>
          <MDBDropdownItem link>HR</MDBDropdownItem>
          <MDBDropdownItem link>Machine Learning</MDBDropdownItem>
      </MDBDropdownMenu>
      </MDBDropdown>
      </div> 
        </div>

  <form onSubmit={handleUpload} style={{marginLeft: '1em'}}>
      <p >Upload Resume:</p>
      <div class="d-flex align-items-start">
      <span> <input type="file" style={{marginLeft:'5em'}} /></span>
      <span><Button variant='outlined' style={{color:"#5D3FD3", borderBlockColor: '#5D3FD3'}} type="submit">Upload Resume</Button>
      </span>
      </div>
    


      </form>
            <Button type="submit"  onClick={()=>{navigate('/recruiter')}}style={{width:"15em",backgroundColor: "#5D3FD3",
            borderRadius: "5px", color:'white' , marginBottom: '5em',
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

export default ProfileC;
