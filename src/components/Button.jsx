import React from 'react'

const Button = ({name}) => {
  return (
   <button className='px-3 m-3 py-1 bg-black text-white rounded-md'>{name}</button>
  )
}

export default Button