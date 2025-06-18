import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
function Github() {
   const data= useLoaderData()
    // const[data, setData]= useState([])
    // useEffect(()=>{
    //   fetch('http://api.github.com/users/hiteshchoudhary')
    //   .then(response => response.json())
    //   .then(data=>{
    //      setData(data)
    //   })
    // },[])

  return (
    <div className='text-center m-5 bg-gray-500 text-white p-4 text-4xl'>
      Github Followers: {data.followers}
      {/* <img src="{data.avatar_url}" alt="Git picture" width={300} /> */}
       <img
        src="https://i.pinimg.com/originals/ff/98/9f/ff989f5f486f6a1a69f9d1c6c81b3c2b.jpg"
        alt="Naruto"
        width={200}
        className="mx-auto mt-4"
      />
    </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
   const response= await fetch('http://api.github.com/users/hiteshchoudhary')
   return response.json()
}
