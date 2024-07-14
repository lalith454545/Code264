import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Editorpage from './pages/Editorpage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster position='top-right'>

      </Toaster>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/editor/:roomno' element={<Editorpage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
