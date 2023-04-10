import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Applied_jobs_data from '../Applied_jobs_data/Applied_jobs_data';
import pik1 from '../../assets/All Images/Vector-1.png';
import pik2 from '../../assets/All Images/Vector.png'

const Applied_jobs = () => {
    const data=useLoaderData();
    console.log(data);
    return (
        <div>
            <div className='container contaner2 position-relative'>
           
           <div style={{marginTop:"-100px"}} className='position-absolute end-0 top-0'><img src={pik1} alt="victor1" /></div>
          <div className='d-flex justify-content-center align-items-center'>
           <h3>Applied_jobs</h3></div>
           <div  className='position-absolute start-0 bottom-0'><img src={pik2} alt="vector2" /></div>
           
           </div>
        <div className='container my-2'>
            <div className='mx-auto'>
          <div>
           {
            data.map(index=><Applied_jobs_data indexdata={index} key={index.id}></Applied_jobs_data>)
           }
         </div></div>
        </div>
        </div>
    );
};

export default Applied_jobs;