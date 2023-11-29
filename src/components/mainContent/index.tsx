import React from 'react'
import PatientsStatistics from '../../pages/PatientsStatistics'
import { Outlet } from 'react-router-dom'

function index() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default index