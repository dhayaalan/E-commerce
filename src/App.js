/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import HomeScreen from './screens/js/HomeScreen';
import Footer from './screens/js/footer';
import Navigation from './screens/js/Navigation';
import Login from './screens/js/Login';

function App() {
  return (
    <div className='main'>
      <Navigation />
        <HomeScreen />
        <Login/>
      <Footer />
    </div>
  );
}

export default App;
