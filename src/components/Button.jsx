import React from 'react'

const Button = ({name}) => {
  return (
   <button className='px-2 m-3 py-1 bg-gray-100 text-black rounded-md'>{name}</button>
  )
}

export default Button