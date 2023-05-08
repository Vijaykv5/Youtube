import React, { useEffect } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constant';

const Videocontainer = () => {

  useEffect(()=>{
    getVideos();
  },[])

  const getVideos =async()=>{
    const data=await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    console.log(json);
  }
  return (
    <div>Videocontainer</div>
  )
}

export default Videocontainer