import { getCurrentUser } from '@/services/AuthService';
import React from 'react';

const Home = async() => {
  const getUser = await getCurrentUser();
  console.log(getUser)
  return (
    <div>
      
    </div>
  );
};

export default Home;