import './App.css';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div>
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
      <HomeScreen></HomeScreen>
      </main>
    </div>
  );
}

export default App;
