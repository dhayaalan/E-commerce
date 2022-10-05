import React from 'react';
import NavigationHeader from "./shared/NavigationHeader";

function Signup() {
  return (
    <div>
      <NavigationHeader />
      <form>
        <div class='wrapper'>
          <div className='login'>Signup</div>
          <form class='p-3 mt-3'>
            <div class='form-field d-flex align-items-center'>
              <span class='fas fa-key'></span>
              <input
                type='text'
                name='userName'
                id='userName'
                placeholder='Name'
              />
            </div>
            <div>
              <div class='form-field d-flex align-items-center'>
                <span class='fas fa-key'></span>
                <input
                  type='text'
                  name='userName'
                  id='userName'
                  placeholder='Email-id'
                />
              </div>
            </div>
            <div>
              <div class='form-field d-flex align-items-center'>
                <span class='fas fa-key'></span>
                <input
                  type='text'
                  name='userName'
                  id='userName'
                  placeholder='Password'
                />
              </div>
            </div>
            <div>
              <div class='form-field d-flex align-items-center'>
                <span class='fas fa-key'></span>
                <input
                  type='text'
                  name='userName'
                  id='userName'
                  placeholder='Confirm-Password'
                />
              </div>
            </div>
            <div class='form-group form-check'>
              <input
                type='checkbox'
                class='form-check-input'
                id='exampleCheck1'
              />
              <label class='form-check-label' for='exampleCheck1'>
                Check me out
              </label>
            </div>
            <button type='submit' class='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
      </form>
    </div>
  );
}

export default Signup;
