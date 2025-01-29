"use client"
import { useState } from 'react';
import React from 'react';
import '../styles/user-card.css';

function UserCard() {
    const [data, setData] = useState({
        name: 'John Doe',
        age: 34,
        email: 'example@mail.it'
    });

    return (
        <div className="user-card flex flex-col justify-center items-center bg-white
        gap-4 rounded-2xl">
            <div className="user-avatar bg-gray-200"></div>
            <h2 className="text-black" >{data.name}</h2> 
            <p className="text-black">{data.age}</p>
        </div>
    );
}
export default UserCard;