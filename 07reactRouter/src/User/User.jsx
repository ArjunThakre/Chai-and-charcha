import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid}=useParams()
  return (
    <div className='bg-gray-800 text-white text-3xl p-2'>
      Mr Thakre:{userid}
    </div>
  )
}

export default User
