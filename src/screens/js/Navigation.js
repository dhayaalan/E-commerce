import React from 'react';
import { Link } from 'react-router-dom';
// import { Route, Router } from 'react-router-dom';
// import Login from './Login';

function Navigation() {
  return (
    <div>
      <header>
        <div className='nav'>
          <p>E-commerce</p>
        </div>
        <div className='nav justify-content-end'>
          <Link className='nav-link' to="/home">
            Home
          </Link>
          <Link className='nav-link' to='/login'>
            Login
          </Link>
          <Link className='nav-link' to='/Signup'>
            Signup
          </Link>
          <Link className='nav-link' href='/Contact'>
            Contact
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Navigation;
