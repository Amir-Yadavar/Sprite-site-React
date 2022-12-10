import React from 'react';
import './App.css';
import routes from './routes';
import {useRoutes} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  
  let route = useRoutes(routes)

  return (
    <section className='container-app'>
    <Navbar/>
    {route}
    <Footer/>
    </section>
  );
}

export default App;
