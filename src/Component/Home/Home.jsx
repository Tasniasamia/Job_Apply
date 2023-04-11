import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import pic1 from '../../assets/All Images/P3OLGJ1 copy 1.png'
import Feature_job from '../Feature_jod/Feature_job';
import Job_catagory from '../Job_catagory/Job_catagory';
import './Home.css'
const Home = () => {
    const [values,setValue]=useState(false);
const loaddata=useLoaderData();
const[load,setLoad]=useState(loaddata)
console.log(load);

    const[data,setData]=useState([])
    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    console.log(data);
    return (
        <div>
            <div className='contaner'>
        <div className='container '>
            <div className='d-flex justify-content-between flex-md-row flex-column'>
                <div className='d-flex flex-column justify-content-center'>
                    <div><h2>One Step Closer To Your <span className='text-primary'>Dream Job</span> </h2></div>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <div><button className='btn-primary'>Get Started</button></div>
                </div>
                
                <div className='mt-4 mt-md-0'>
                    <img className='img-fluid' src={pic1} alt="person" />
                </div>
            </div>
            
        </div></div>
        <div className='container'>
            <div  style={{paddingTop:"200px"}}>
         <h3 className='text-center mt-5'>Job Catagory List</h3>
         <p className='text-center pb-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
         <div className='d-flex justify-content-evenly flex-md-row flex-column'>
         {
            data.map(index=><Job_catagory key={index.id} jobdata={index}></Job_catagory>)
         }
         </div>
         </div>
         <div style={{paddingTop:"200px"}}>
         <h3 className='text-center mt-5 '>Featured Jobs</h3>
         <p className='text-center pb-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>
        <div className='row row-cols-1 row-cols-md-2 g-4'>
         
           {
            load.slice(0, values? 6 : 4).map(index=><Feature_job propsdata={index} key={index.id}></Feature_job>)
           
           }

         </div>
         </div>
         <div className='text-center my-5'onClick={()=>setValue(!values)}>
            {
                values?"":<button className='btn-success'>See All Jobs</button>
            }
            
         </div>
        </div>
        </div>
    );
};

export default Home;