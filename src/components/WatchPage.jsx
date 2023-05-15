import React ,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
 
  const [searchParams] = useSearchParams();
  const sid =searchParams.get('v')

  // const dispatch =useDispatch();
  // // useEffect(()=>{
  // //         dispatch(closeMenu)
  // // },[])
  return (
    <div className='px-9 py-1 mr-[700px]'> 
      <iframe width="850" height="490" src={"https://www.youtube.com/embed/"+sid+'?autoplay=1&cc_load_policy=1'} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage