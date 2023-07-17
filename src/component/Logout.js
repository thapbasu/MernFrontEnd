import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  const [config] = useState(
    {
      headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
    },
    []
  );
  const logout2 = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    if (!localStorage.getItem('token')) {
      navigate('/login1');
    }
  };

  return (
    <>
      <button onClick={logout2}>logout</button>
    </>
  );
};

export default Logout;
