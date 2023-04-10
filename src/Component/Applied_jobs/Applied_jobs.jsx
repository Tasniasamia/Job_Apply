import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Applied_jobs_data from '../Applied_jobs_data/Applied_jobs_data';

const Applied_jobs = () => {
    const data=useLoaderData();
    console.log(data);
    return (
        <div className='container my-2'>
            <div className='mx-auto'>
          <div>
           {
            data.map(index=><Applied_jobs_data indexdata={index} key={index.id}></Applied_jobs_data>)
           }
         </div></div>
        </div>
    );
};

export default Applied_jobs;