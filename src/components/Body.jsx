import React from 'react'

import MainContainer from './MainContainer'
import SideBar from './Sidebar'
import { Outlet } from 'react-router'

const Body = () => {
  return (
    <div className='grid grid-flow-col grid-cols-6  '>
      <SideBar/>
     <Outlet/>
    </div>
  )
}

export default Body