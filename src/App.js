import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <div>
            <p>E-commerce</p>
          </div>
          <div className='app'>
            <p>home</p>
            <p>login</p>
            <p>About</p>
            <p>contact</p>
          </div>
        </header>
        <main>
          <h4>Products Listed</h4>
          <HomeScreen></HomeScreen>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
