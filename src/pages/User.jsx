import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const User = () => {
  const { id } = useParams();
  const students = useSelector((state) => state.students.students);
  
  
  const user = students.find((stu) => stu.id == id);

  if (!user) {
    return <div className='text-center mt-10'>User not found.</div>;
  }

  return (
    <div className='bg-white rounded shadow-md max-w-lg p-6 mx-auto'>
      <h1 className="text-xl font-bold mb-2">{user.name}</h1>
      <p className="text-gray-600 mb-1"><span className="font-medium">Email:</span> {user.email}</p>
      <p className="text-gray-600 mb-1"><span className="font-medium">Phone:</span> {user.phone}</p>
      <p className="text-gray-600 mb-1"><span className="font-medium">Website:</span> {user.website}</p>
      {user.company && (
        <p className="text-gray-600 mb-1"><span className="font-medium">Company:</span> {user.company.name}</p>
      )}
      
      <Link to='/'>
        <button className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-all">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default User;
