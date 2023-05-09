import React from 'react'

const Videocard = ({info}) => {
    const {snippet,statistics}=info
    const {channelTitle,title,thumbnails}=snippet
    console.log(info)
  
  return (
    <div className='p-2  ml-6 m-2 w-72 shadow-md'>
        <img  className="rounded-md w-full "src={thumbnails.medium.url}/>
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
 
    </div>
   
  )
}

export default Videocard