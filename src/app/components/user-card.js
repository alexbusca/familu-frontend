import React from 'react';
import '../styles/user-card.css';

function UserCard() {
    return (
        <div className="user-card flex flex-col justify-center items-center bg-white
        gap-4 rounded-2xl">
            <div className="user-avatar bg-gray-200"></div>
            <h2 className="text-black" >name</h2> 
            <p className="text-black">34%</p>
        </div>
    );
}
export default UserCard;