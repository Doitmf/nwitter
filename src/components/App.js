//import './App.css';
import Router from 'components/Router'
import React, { useState } from 'react'
import { authService } from 'fbase';

function App() {
  console.log('auth', authService.currentUser)
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser)
  return (
    <>
      <Router isLoggedIn={isLoggedIn} />
    </>
  );
}

export default App;
