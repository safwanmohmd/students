import React from 'react'
import Card from '../componants/Card'
import { useState,useEffect } from 'react'
import CreateInputs from '../componants/CreateInputs'
import { fetchStudents } from '../features/studentSlice'
import { useSelector,useDispatch } from 'react-redux'
import { FaPlus } from "react-icons/fa";
const Home = () => {
const [addStudent, setaddStudent] = useState(false);
 const users = useSelector((state)=>state.students.students)
const dispatch = useDispatch()
useEffect(()=>{

  dispatch(fetchStudents())
  
},[])

  if (!users) {
    return <div className='text-center mt-10'>Loading...</div>;
  }


  return (
    <> 
     <div className="flex justify-end mb-6">
          <button
            onClick={() => setaddStudent(!addStudent)}
            className= "flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition bg-gray-800 text-green-400 hover:bg-gray-700"
          >
            <FaPlus />
            {addStudent ? "Cancel" : "Add Student"}
          </button>
        </div>
        {addStudent && <CreateInputs />}

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1.5'>
     {users.map((usr)=>{
        return <Card key={usr.id} users={usr}/>
     })}
      
      

    </div></>
    
  )
}

export default Home