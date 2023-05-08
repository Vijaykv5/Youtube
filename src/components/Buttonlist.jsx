import React from 'react'
import Button from './Button'


const list=["All","Gaming","Songs","Live","Soccer","Cricket","Chess","Fifa","Cooking","News"]
const Buttonlist = () => {
  return (
    <div className='flex'>
      {list.map((e,index)=>( 
      <Button name={e}/>
  ))}

    </div>
  )
}

export default Buttonlist