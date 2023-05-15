import React from 'react'

const Videocard = ({info}) => {
    const {snippet,statistics}=info
    const {channelTitle,title,thumbnails,publishedAt}=snippet
    
    var date = new Date(publishedAt);
    const s = date.toISOString().substring(0, 10);
    
    var todayDate = new Date().toISOString().slice(0, 10);
   
    const timeDiff = new Date(todayDate).getTime() - new Date(s).getTime();

    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    const diffSeconds = Math.ceil(timeDiff / 1000);

    const hours = Math.floor(diffSeconds / 3600);
    const minutes = Math.floor((diffSeconds - (hours * 3600)) / 60);
    const seconds = diffSeconds - (hours * 3600) - (minutes * 60);
    console.log(timeDiff);

    // (diffDays===0)?console.log({minutes},"ago"):console.log({diffDays} ,'day ago')
    

  return (
    <div className='p-2 m-3 shadow-md'>
        <img  className="rounded-md  "src={thumbnails.medium.url}/>

        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
            {/* {(diffDays==0)?<li>{hours} ago</li>: */}
            <li>{diffDays} day ago</li>
            {/* <li>{(diffDays)= 0} {diffDays} ago</li> */}
           
        </ul>
 
    </div>
   
  )
}

export default Videocard