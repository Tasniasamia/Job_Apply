import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Applied_jobs_data from '../Applied_jobs_data/Applied_jobs_data';
import pik1 from '../../assets/All Images/Vector-1.png';
import pik2 from '../../assets/All Images/Vector.png'

const Applied_jobs = () => {
    const data=useLoaderData();
    const[data2,setData]=useState(data);
    console.log(data2);
//mywork


function remotedata(){
    let newarray=[];
   for(let i of data){
    if(i.jobtype=="Remote"){
       newarray.push(i);
    }
   }
   setData(newarray);
}

function onsitedata(){
    let newarray=[];
   for(let i of data){
    if(i.jobtype=="Onsite"){
       newarray.push(i);
    }
   }
   setData(newarray);
}
function alldata(){
    setData(data);
}
    //mywork
    
  
    return (
        <div>
            <div className=' contaner2 position-relative'>
           
           <div style={{marginTop:"-100px"}} className='position-absolute end-0 top-0'><img src={pik1} alt="victor1" /></div>
          <div className='d-flex justify-content-center align-items-center'>
           <h3 className='my-3'>Applied jobs</h3></div>
           <div  className='position-absolute start-0 bottom-0'><img src={pik2} alt="vector2" /></div>
           
           </div>
         <div className='container my-4 d-flex justify-content-end'>
           <div className="btn-group">
  
    <div className="btn-group">
      <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">View</button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#"onClick={remotedata}>Remote</a></li>
        <li><a className="dropdown-item" href="#"onClick={onsitedata}>Onsite</a></li>
        <li><a className="dropdown-item" href="#"onClick={alldata}>All</a></li>
      </ul>
    </div>
  </div>
  </div>
            {/* mywork */}
        <div className='container my-2'>
            <div className='mx-auto'>
          <div>
           {
            data2.map(index=><Applied_jobs_data indexdata={index} key={index.id}></Applied_jobs_data>)
           }
         </div></div>
        </div>
        </div>
    );
};

export default Applied_jobs;