import React from 'react';

const Job_catagory = (props) => {
    const propsdata=props.jobdata;
    return (
        <div>
            {
                propsdata.catagory.map((index)=><div key={index}>
                    <div style={{background:"aliceblue"}} className="p-3">
                    <img src={index.logo} style={{height:"50px"}} alt="job" />
                    <h4 className='my-3'>{index.title}</h4>
                    <h6>{index.chance}</h6>
                    </div>
                </div>
                   
            )
            }
        </div>
    );
};

export default Job_catagory;