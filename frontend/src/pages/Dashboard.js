import React from 'react';
import { useSelector } from 'react-redux';
const Dashboard = () => {
  const username = useSelector((store) => store.dashboard.username);
  return (
    <>
      <h1>Dahsboard</h1>
      <p>username : {username}</p>
    </>
  );
};

export default Dashboard;
