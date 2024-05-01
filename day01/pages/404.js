import React from 'react';
import {useRouter} from 'next/router'


export default function Error() {
  const router=useRouter();
    const handelError=()=>{
        
        router.push('/home')
    }
  return (
  
  <div className='container'>
    <div className='text-center p-5 font-weight-bold'> Not found</div>
    <button className='btn btn-success p-3 text-center' onClick={handelError}
    >back</button></div>
  )
}

Error.getLayout=function pageLayout(page){
    return <>{page}</>
}