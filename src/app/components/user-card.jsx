'use client';
import { useState } from 'react';
import React from 'react';
import '../styles/user-card.css';

function UserCard() {
  const [data, setData] = useState({
    name: 'John Doe',
    age: 34,
    email: 'example@mail.it',
  });

  return (
    <div className="user-card flex flex-col justify-center items-center bg-white gap-2 rounded-2xl">
      <div className="user-avatar bg-gray-200"></div>
      <h2 className="text-black">{data.name}</h2>
      <p className="text-black">{data.age}</p>
      <p className="text-black">{data.email}</p>
      <button
        className="btn btn-primary w-24 h-8 rounded-lg bg-blue-500"
        onClick={() =>
          setData((prevData) => ({
            ...prevData,
            age: prevData.age + 3,
          }))
        }
      >
        Edit
      </button>
    </div>
  );
}
export default UserCard;
