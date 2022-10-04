import React from 'react';
import Data from '../../data';
import '../css/HomeScreen.css';

// Horizontal List
// function HorizontalList(props) {
//   return (
//     <div className='row'>
//       {props.items.map((employee) => (
//         <div className='col-4 col-md-2' key={employee.Id}>
//           <img src={employee.image} alt={employee.category} />
//           {/* <p>{employee.name}</p>
//             <p>{employee.salary}</p> */}
//         </div>
//       ))}
//     </div>
//   );
// }

function HorizontalList1(props) {
  return (
    <div className='row'>
      {props.items.map((employee) => (
        <div className='col-6 col-sm-2' key={employee.Id}>
          <img src={employee.image} alt={employee.category} width="100%" />
          {<p>{employee.name}</p>}
        </div>
      ))}
    </div>
  );
}

function HomeScreen() {
  return (
    <div className='Home'>
      <div>
        <h6>Laptop</h6>
      </div>
      <HorizontalList1 className='list' items={Data.employees} />
      <div>
        <h6>Mobiles</h6>
      </div>
      <HorizontalList1 className='list' items={Data.employees} />
    </div>
  );
}

export default HomeScreen;
