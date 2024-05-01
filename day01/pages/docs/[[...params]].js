import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function params() {

    const router=useRouter();
    const {params=[]}=router.query;
    useEffect(()=>{
      
        console.log(router);
        
    },[])
  return (
    <div>params</div>
  )
}
