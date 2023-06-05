// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './resource/views/home';
import NoPage from './resource/views/NoPages';
import Navbar from './components/navbar';

// import Navbar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Home/>} />
          <Route path='*' element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
