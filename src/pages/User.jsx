import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const User = () => {
  const [user,setUser] = useState(null)
  const {id} = useParams()
  const getUser = async ()=>{
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    setUser(response.data)
    console.log(response.data);
   
  }
useEffect(()=>{
  getUser()
},[])

  if (!user) {
    return <div className='text-center mt-10'>Loading...</div>;
  }

  return (
    <div className='bg-white rounded shadow-md max-w-lg p-6 mx-auto '>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
      <p>{user.company.name}</p>
      <Link to={'/'}> <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        go back
        
    </button>
     </Link>

    </div>
  )
}

export default User