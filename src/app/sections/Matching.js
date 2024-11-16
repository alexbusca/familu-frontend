import React from 'react';
import UserCard from '../components/user-card';

function Matching(){
  return (
    <div className='Matching mr-10 ml-10 flex flex-row justify-start gap-4'>
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
  
    </div>
  );
};

export default Matching;