import React from 'react';
import Data from '../data';
import './HomeScreen.css';

function HomeScreen() {
  return (
    <div>
      <main className='Home'>
        {Data.employees.map((employee) => (
          <div key={employee.Id}>
            <img src={employee.image} alt={employee.category} />
            <p>{employee.name}</p>
            <p>{employee.salary}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default HomeScreen;
