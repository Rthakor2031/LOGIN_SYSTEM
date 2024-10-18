import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Logout = () => {
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/logout', {}, { withCredentials: true });
      history.push('/login');
    } catch (err) {
      console.error(err.response.data.error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
