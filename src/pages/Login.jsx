import React from 'react';
import NavigationHeader from "./shared/NavigationHeader";

function Login() {
  return (
    <div className='bg'>
      <NavigationHeader />
      <div class='wrapper'>
        <div className='login'>Login Page</div>
        <form class='p-3 mt-3'>
          <div class='form-field d-flex align-items-center'>
            <span class='far fa-user'></span>
            <input
              type='text'
              name='userName'
              id='userName'
              placeholder='Username'
            />
          </div>
          <div class='form-field d-flex align-items-center'>
            <span class='fas fa-key'></span>
            <input
              type='password'
              name='password'
              id='pwd'
              placeholder='Password'
            />
          </div>
          <button class='btn mt-3'>Login</button>
        </form>
        <div class='text-center fs-6'>
          <a href='Login'>Forget password?</a> or <a href='Signup'>Sign up</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
