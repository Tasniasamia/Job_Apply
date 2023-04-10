import React from 'react';
import { Link } from 'react-router-dom';
import { adValue } from '../../../Localstorage_function/fakedb';

const Applied_jobs_data = (props) => {
    const propsdata=props.indexdata;
    console.log(propsdata);
    return (
        <div style={{border:"1px solid gray"}}className="d-flex justify-content-between  align-items-center p-5 my-4">
            <div style={{width:"30%"}}className="me-3">
<img src={propsdata.img} style={{width:"250px"}} alt="company" />

            </div>
            <div className='d-flex justify-content-between align-items-center'style={{width:"70%"}}>
            <div style={{width:"60%"}}>
<h4>{propsdata.profession}</h4>
<h6>{propsdata.company_name}</h6>
<div>
    <button className='btn-outline-primary me-2'>{propsdata.jobtype}</button>
    <button className='btn-outline-primary'>{propsdata.jobtime}</button>

</div>
<div className='mt-3'>
              <span className='me-3'><i className="fa-solid fa-location-dot"></i> Location: {propsdata.location}</span>
                <span> <i className="fa-solid fa-dollar-sign"></i>  Salary: {propsdata.salary} </span>
            </div>

            </div>
            <div style={{width:"20%"}}>
                <Link to="/view_detail">
<button className='btn-primary'onClick={adValue(propsdata.id)}>View Details</button></Link>
</div>
</div>
            
        </div>
    );
};

export default Applied_jobs_data;