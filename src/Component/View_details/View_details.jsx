import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Viewitem from '../Viewitem/Viewitem';

const View_details = () => {
    const loaddata=useLoaderData();
    console.log(loaddata);
    return (
        <div>
            {
                loaddata.map(index=><Viewitem indexdata={index} key={index.id}></Viewitem>)
            }
        </div>
    );
};

export default View_details;