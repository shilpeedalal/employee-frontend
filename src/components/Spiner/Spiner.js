import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import "./spiner.css"

const Spiner = () => {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center' style={{ width: "100%", height: "50vh" }}>
      <Spinner className='loader' animation="border" /> 
      {/* &nbsp;&nbsp;<span className='loader_text'>mr_ajweb_developer</span> */}

      </div>
    </>
  )
}

export default Spiner