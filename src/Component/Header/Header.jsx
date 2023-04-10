import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
      <div className='container d-flex justify-content-between align-items-center contaner'>
        <div>
<h4>Job Circular</h4>
        </div>
        <div className='navbar'>
            <Link to="/">Home</Link>
            <Link to="/Statistics">Statistics</Link>
            <Link to="/Apply_job">Applied_jobs</Link>

            <Link to="/Blogs">Blogs</Link>

        </div>
        <div>
<button className='btn-primary'>Start Applying</button>
        </div>
        </div>
    );
};

export default Header;