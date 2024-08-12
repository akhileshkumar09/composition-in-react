import React from 'react'
import {Link} from 'react-router-dom'



function PagesMenu() {
  return (
    <div className='container'>
        <Link to='/welcome-dialog'>Welcome</Link>
        <Link to='/card'>Card</Link>
        <Link to='/page-layout'>Page Layout</Link>
        <Link to='/form'>Form</Link>
        <Link to= '/widget-dashboard'>Widget Dashboard</Link>
    </div>
  )
}

export default PagesMenu