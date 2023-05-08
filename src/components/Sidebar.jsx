import React from 'react'
import { useSelector } from 'react-redux'
import store from '../utils/store'

const SideBar = () => {
  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen)
  //Early Return
  if(!isMenuOpen) return null;

  return (
    <div className='p-5  w-48 shadow-lg'>
       
        <ul>
            <li>Home</li>
            <li>Shorts</li>
            <li>videos</li>
            <li>live</li>
        </ul>
        <h1 className='font-bold'>Subscriptions</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>

    </div>
  )
}

export default SideBar