import React from 'react'

export default function Courses({coursess}) {
  return (
    <>
    {coursess.map((course)=>
    <div className='container' key={course.id}>
    <h1>{course.course}</h1>
    <h1>{course.price}</h1>
    </div>
    )}
    
    </>
  )
}


export async function getServerSideProps(){
    const res=await fetch(`http://localhost:4000/courses`);
    const data=await res.json();
    return{
        props:{coursess:data}
    }
}