import React from 'react';
import { Link } from 'react-router-dom';
import { adValue } from '../../../Localstorage_function/fakedb';
import View_details from '../View_details/View_details';

const Feature_job = (props) => {
    const propsvalue=props.propsdata;
    console.log(propsvalue);
    return (
        <div style={{border:"2px solid whitesmoke"}} className="p-3">
            <img src={propsvalue.img} alt="company" />
            <h5 className='mt-2'>{propsvalue.profession}</h5>
            <p>{propsvalue.company_name}</p>
            <div>
                <button className='btn-outline-primary me-2'>{propsvalue.jobtype}</button>
                <button className='btn-outline-primary'>{propsvalue.jobtime}</button>
            </div>
            <div className='mt-3'>
              <span className='me-3'><i className="fa-solid fa-location-dot"></i> Location: {propsvalue.location}</span>
                <span> <i className="fa-solid fa-dollar-sign"></i>  Salary: {propsvalue.salary} </span>
            </div>
         <Link to="/view_detail" ><button className='btn-primary mt-3'onClick={()=>adValue(propsvalue.id)}>View Details</button>
         
         </Link>  
        </div>
    );
};

export default Feature_job;