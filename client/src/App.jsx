
import { Routes, Route } from 'react-router-dom';
import Home from './views/home/Home';
import Navbar from "./ui/components/navbar/Navbar";
import Footer from './ui/components/footer/Footer';

function App() {

  return(
    <div className='layoutApp'>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
