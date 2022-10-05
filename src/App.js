/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import HomeScreen from './screens/js/HomeScreen';
import Footer from './screens/js/footer';
import Navigation from './screens/js/Navigation';


function App() {
  return (
    <div className='main'>
      <Navigation />
        <HomeScreen />
      <Footer />
    </div>
  );
}

export default App;
