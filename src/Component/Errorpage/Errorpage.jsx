import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className='d-flex align-items-center justify-content-center p-5 bg-gray text-gray'style={{height:"700px"}}>
      <div className='container d-flex flex-col align-items-center justify-content-center px-5 mx-auto my-5'>
       <div>
        <div className=' text-center'>
          <h2 className='mb-5  text-gray'style={{fontSize:"40px",fontWeight:"bold"}}>
            <span className='sr-only'>Error</span> {status || 404}
          </h2>
          <p className='  mb-5'style={{fontSize:"25px",fontWeight:"bold",}}>
            {error?.message}
          </p>
          <Link
            to='/'
            className='px-5 py-3  rounded bg-cyan text-gray'style={{fontWeight:"bold"}}
          >
            Back to homepage
          </Link>
        </div>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
