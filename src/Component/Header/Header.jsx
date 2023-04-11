import React from 'react';
// import { Link } from 'react-router-dom';
import Activestyle from '../Activestyle/Activestyle';
import './Header.css'
const Header = () => {
    return (
        <div className='contaner'>
      <div className=' d-flex justify-content-between align-items-center container  flex-md-row flex-column'>
        <div>
<h4 style={{fontWeight:"bold"}}>Job Circular</h4>
        </div>
        <div>

        <div className='navbar z-index-1'>
            
            <Activestyle to="/">Home</Activestyle>
            <Activestyle to="/Statistics">Statistics</Activestyle>
            <Activestyle to="/Apply_job">Applied_jobs</Activestyle>

            <Activestyle to="/Blogs">Blogs</Activestyle>

        
<button className='btn-primary ms-md-3 ms-0 me-5 me-md-0 mt-2 mt-md-0'>Start Applying</button>
        </div></div>
        </div></div>
    );
};

export default Header;