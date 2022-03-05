import React from 'react';
import { useSelector } from 'react-redux';
const Dashboard = () => {
  const username = useSelector((store) => store.dashboard.username);
  return (
    <div>
      <h1 className='text-3xl font-bold'>dashboard page</h1>
      <div>content</div>
      <div>rooms</div>
      <div>login user list</div>
      <div>logo</div>
    </div>
  );
};

export default Dashboard;
