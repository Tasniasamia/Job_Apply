import React from 'react';
import pik from '../../assets/Icons/Group 9969.png'
const Footer = () => {
    return (
       
       <div style={{marginTop:"50px",marginBottom:"-200px"}}>
        <div style={{background:"black"}} >
            <div className='container row row-cols-1 row-cols-md-5 g-4 text-white mx-auto py-3'style={{borderBottom:"1px solid white"}}>
                <div className='col'>
                    <h3>Job Circular</h3>
                    <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <img src={pik} alt="grop-social" />

                </div>
                <div className='col'>
                    <h6 style={{fontWeight:"bold",fontSize:"20px"}}>Company</h6>
                  
                    <p>About us</p>
                    <p>Work</p>
                    <p>Latest News</p>
                    <p>Careers</p>
                </div>
                <div className='col'>
                    <h6 style={{fontWeight:"bold",fontSize:"20px"}}>Products</h6>
                    <p>Prototype</p>
                    <p>Plans & Pricing</p>
                    <p>Customers</p>
                    <p>Integrations</p>
                </div>
                <div className='col'>
                    <h6 style={{fontWeight:"bold",fontSize:"20px"}}>Support</h6>
                    <p>Help Desk</p>
                    <p>Sales</p>
                    <p>Become a Partner</p>
                    <p>Developers</p>
                </div>
                <div className='col'>
                    <h6 style={{fontWeight:"bold",fontSize:"20px"}}>Contact</h6>
                    <p>524 Broadway , NYC</p>
                    <p>+1 777 - 978 - 5570</p>
                </div>
            </div>
          <div className='container text-white d-flex flex-md-row flex-column justify-content-between align-items-center my-3 py-3'>
            <div className='ps-md-3'>
            <p style={{fontWeight:"bold"}}>&copy;2023 Job Circular All rights reserved</p></div>
          <div> <p style={{fontWeight:"bold"}}>Powered by Job Circular</p></div> 
          </div>
            
        </div></div>
      
    );
};

export default Footer;