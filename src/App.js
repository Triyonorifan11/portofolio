// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './resource/views/home';
import NoPage from './resource/views/NoPages';
import Navbar from './components/navbar';
import Portofolio from './resource/views/portofolio';

// import Navbar from './components/navbar';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Home/>} />
          <Route path='/portofolio' element={<Portofolio/>} />
          <Route path='*' element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
