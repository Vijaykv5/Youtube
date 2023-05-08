import React from 'react'

import MainContainer from './MainContainer'
import SideBar from './Sidebar'

const Body = () => {
  return (
    <div className='grid grid-flow-col grid-cols-6  '>
      <SideBar/>
      <MainContainer/>
    </div>
  )
}

export default Body