import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const assignments=[
        {
            name:"assignment-1",
            mark:60
        },
        {
            name:"assignment-2",
            mark:59
        },
        {
            name:"assignment-3",
            mark:60
        },
        {
            name:"assignment-4",
            mark:60
        },
        {
            name:"assignment-5",
            mark:56
        },
        {
            name:"assignment-6",
            mark:60
        },
        {
            name:"assignment-7",
            mark:60
        },
        {
            name:"assignment-8",
            mark:60
        }
    ]
    return (
        <div className='container d-flex justify-content-center my-5'>
            <div>
             <AreaChart
          width={1000}
          height={400}
          data={assignments}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        </div>
        </div>
    );
};

export default Statistics;