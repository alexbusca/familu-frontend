import React from 'react';
import '../styles/user-card.css';

function UserCard() {
    return (
        <div className="user-card flex flex-col justify-center items-center">
            <h2 className="text-black">name</h2>
            <p className="text-black">34%</p>
        </div>
    );
}
export default UserCard;