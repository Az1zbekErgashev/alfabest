import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
         <Navbar/>
         <Outlet/>
         <Footer/>
    </div>
  );
}

export default App;
