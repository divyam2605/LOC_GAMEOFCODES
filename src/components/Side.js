// import React from 'react'
// import { Sidebar,Menu,MenuItem,useProSidebar } from 'react-pro-sidebar'
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";


// const Side = () => {
//     const {collapseSidebar} = useProSidebar();
//   return (

//     <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
//     <Sidebar style={{ height: "100vh" }}>
//       <Menu>
//         <MenuItem
//           icon={<MenuOutlinedIcon />}
//           onClick={() => {
//             collapseSidebar();
//           }}
//           style={{ textAlign: "center" }}
//         >
//           {" "}
//           <h2>Admin</h2>
//         </MenuItem>

//         <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
//         <MenuItem icon={<PeopleOutlinedIcon />}>Team</MenuItem>
//         <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
//         <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
//         <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
//         <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
//       </Menu>
//     </Sidebar>
//     <main>
//       <h1 style={{ color: "white", marginLeft: "5rem" }}>
//         React-Pro-Sidebar
//       </h1>
//     </main>
//   </div>
//   )
// }

// export default Side

import React from 'react'

import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import FeedIcon from '@mui/icons-material/Feed';
import PersonIcon from '@mui/icons-material/Person';
import HelpIcon from '@mui/icons-material/Help';

import GroupIcon from '@mui/icons-material/Group';
import { Link } from 'react-router-dom';

const Side = () => {

    const { collapseSidebar } = useProSidebar();
  return (
    <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
       
        <Sidebar  
        style={{ height: "100vh" , backgroundColor:'white'}}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>Admin</h2>
          </MenuItem>
          <Link to={'/'}><MenuItem icon={<HomeOutlinedIcon />}
          >Home</MenuItem></Link>
          <Link to={'/job'}><MenuItem icon={<AccountBoxIcon />
        }
        >Profile</MenuItem></Link>
          <Link to={'/blog'}><MenuItem icon={<FeedIcon />} //correct
          >Blogs</MenuItem></Link>
          <Link to={'/'}><MenuItem icon={<PersonIcon />}>Candidates</MenuItem></Link>
          <Link to={'/'}><MenuItem icon={<GroupIcon />}>Recruiters</MenuItem></Link>
          <Link to ={'/'}><MenuItem icon={<HelpIcon />}>FAQs</MenuItem></Link>
        </Menu>
      </Sidebar>
      
    </div>
  )
}

export default Side;

