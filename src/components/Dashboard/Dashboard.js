import React from 'react';

export default function Dashboard() {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload(false);
  }
  return(
    <>
      <h2>Dashboard</h2>
      <div>
          <button onClickCapture={handleLogout} type="submit">LogOut</button>
      </div>
    </>
    
  );
}