import React, { useState } from 'react'
import './Navbar.css'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Navbar(props) {
  const logoutHandler = () => {
    localStorage.clear()
    window.location.href = '/'
  }
  return (
    <div>
      <div className="topnav">
        <div className='nav2'>
          <Link to='/' > Home</Link>
          {!localStorage.getItem('loginx') ?<div>
            { props.login === 'no' ? <Link to='/login' > Login</Link> : null }
            {props.register === 'no' ? <Link to='/register' > Register</Link> : null}</div>:null}
        </div>


        <div className='nav3'>
          {localStorage.getItem('loginx') ? <div >
            <button className='ubtn' onClick={logoutHandler} >Log Out</button>
          </div>
            : null}</div>



        {/* <h3 className='logo' >Patil Cars</h3> */}
      </div>

    </div>
  )
}

export default Navbar