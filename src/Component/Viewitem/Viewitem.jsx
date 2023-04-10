import React from 'react';
import './Viewitem.css'
import pik1 from "../../assets/All Images/Vector-1.png"
import pik2 from "../../assets/All Images/Vector.png"
import { addToDb } from '../../../Localstorage_function/fakedb';

const Viewitem = (props) => {
    console.log(props.indexdata)
    const propsdata=props.indexdata;
    return (
        <div>
        <div className='container contaner position-relative'>
           
           
     
                <h3 className='text-center mb-3'>Job Details</h3>
                
                </div>
            
            <div className='container d-flex justify-content-between mt-4'>
                <div style={{width:"70%"}}>
                    <div className='mt-2'><span style={{fontSize:"17px",fontWeight:"bold"}}>Job Description:</span> {propsdata.description}</div>
                    <div className='my-2'><span style={{fontSize:"17px",fontWeight:"bold"}}>Job Responsibility:</span> {propsdata.Responsibility}</div>
                    <div><p style={{fontSize:"17px",fontWeight:"bold"}}>Educational requirements:</p> {propsdata.requirements}</div>
                    <div><p style={{fontSize:"17px",fontWeight:"bold"}}>Experience: </p> {propsdata.experience}</div>
                </div>
                <div  style={{width:"25%"}}className="contaner">
                    <div className='mb-3'>
                    <h6 style={{borderBottom:"1px solid gray",paddingBottom:"15px"}}>Job Details:</h6>
                    <div><i className="fa-solid fa-dollar-sign"></i> Salary: {propsdata.salary}</div>
                    <div><i className="fa-regular fa-calendar"></i> Job title: {propsdata.profession}</div></div>
                    <div>
                    <h6 style={{borderBottom:"1px solid gray",paddingBottom:"15px"}}>Contact Information:</h6> 
                    <div><i className="fa-solid fa-phone"></i> Phone: {propsdata.phone}</div>
                    <div><i className="fa-regular fa-envelope"></i> Email: {propsdata.email}</div>
                    <div><i className="fa-solid fa-location-dot"></i> Address: {propsdata.address}</div>
                    <div className='mt-3'>
                        <div className=' w-full text-center text-white p-2 rounded btn-primary'onClick={()=>addToDb(propsdata.id)}>Apply Now</div>
                    </div>
                    </div>
                </div>
            </div>
       
        </div>
    );
};

export default Viewitem;