import react,{ useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './App.scss';


function App() {
  return (
    <div>
     <Header/>
     <Home/>
     {/* <Footer/> */}
    </div>
  );
}

export default App;
