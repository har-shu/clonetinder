import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from "@mui/material";
import ForumIcon from '@mui/icons-material/Forum';
import './Header.css';
function Header(){
   return(
       <div className="header">
        <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
        </IconButton>
        <img className="header__logo"src= "https://th.bing.com/th/id/R.f2e7c88b6c965f6607e44e136a42e182?rik=JaUBtWvVvewX8Q&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ftinder-logo-png--1000.png&ehk=0FlLT7gEoN4BE3ifMJj3Ll4kvBuEtKkVgWs0FWwilCI%3d&risl=&pid=ImgRaw&r=0" alt=""/>
        <IconButton>
            <ForumIcon fontSize="large" className="header__icon" />
        </IconButton>
        

       </div>
   );
}
export default Header;