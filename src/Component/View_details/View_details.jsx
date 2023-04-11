import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Viewitem from '../Viewitem/Viewitem';
import './View_details.css'
import pik1 from '../../assets/All Images/Vector-1.png';
import pik2 from '../../assets/All Images/Vector.png';

const View_details = () => {
    const loaddata=useLoaderData();
    console.log(loaddata);
    return (
        <div>
             <div className=' contaner2 position-relative'>
           
           <div style={{marginTop:"-100px"}} className='position-absolute end-0 top-0'><img src={pik1} alt="victor1" /></div>
          <div className='d-flex justify-content-center align-items-center'>
           <h3 className='my-3'>Job Details</h3></div>
           <div  className='position-absolute start-0 bottom-0'><img src={pik2} alt="vector2" /></div>
           
           </div>
        <div>
            {
                loaddata.map(index=><Viewitem indexdata={index} key={index.id}></Viewitem>)
            }
        </div>
        </div>
    );
};

export default View_details;