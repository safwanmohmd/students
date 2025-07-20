import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteStudent } from "../features/studentSlice";
import { editStudent } from "../features/studentSlice";
const Card = ({ users }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [email, setEmail] = useState(users.email);
  const [name, setName] = useState(users.name);
  const [phone, setPhone] = useState(users.phone);
  const [website, setWebsite] = useState(users.website);
  const handleDelete = (usr) => {
    dispatch(deleteStudent(usr));
  };

  const handleEdit = () => {
    setEditMode(!editMode);
    dispatch(editStudent({ id: users.id, email, name, phone, website }));
    alert('edit has been saved')
  };
  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-sm mx-auto hover:shadow-2xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {editMode ? (
            <div>
              <input
                className="border-2"
                type="text"
                placeholder="edit name"
                onInput={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
          ) : (
            users.name
          )}
        </h2>
        <p className="text-gray-600 text-sm mb-1">
          <span className="font-medium">Email:</span>{" "}
          {editMode ? (
        
              <input
                type="text"
                className="border-2"
                placeholder="edit email"
                onInput={(e) => setEmail(e.target.value)}
                value={email}
              />
            
          ) : (
            users.email
          )}
        </p>
        <p className="text-gray-600 text-sm mb-1">
          <span className="font-medium">Phone:</span>{" "}
          {editMode ? (
            
              <input
                type="text"
                className="border-2"
                placeholder="edit phone"
                onInput={(e) => setPhone(e.target.value)}
                value={phone}
              />
          
          ) : (
            users.phone
          )}
        </p>
        <p className="text-gray-600 text-sm">
          <span className="font-medium">Website:</span>{" "}
          {editMode ? (
        
              <input
                type="text"
                className="border-2"
                placeholder="edit website"
                onInput={(e) => setWebsite(e.target.value)}
                value={website}
              />
          
          ) : (
            users.website
          )}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        {!editMode && (
          <Link to={`/${users.id}`} className="flex-1">
            <button
              type="button"
              className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-all duration-200"
            >
              View
            </button>
          </Link>
        )}

        {editMode ? (
          <>
            {" "}
            <button
              onClick={() => {
                setEmail(users.email);
                setEditMode(!editMode);
              }}
              className="w-full px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-sm font-medium transition-all duration-200"
            >
              cancel edit
            </button>
            <button
              onClick={() => {
                handleEdit();
              }}
              className="w-full px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-sm font-medium transition-all duration-200"
            >
              confirm save
            </button>
          </>
        ) : (
          <button
            onClick={() => {
              setEditMode(!editMode);
            }}
            className="w-full px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-sm font-medium transition-all duration-200"
          >
            Edit
          </button>
        )}

        {!editMode && (
          <button
            onClick={() => {
              if (confirm("Confirm delete?")) {
                handleDelete(users);
              }
            }}
            className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-all duration-200"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
