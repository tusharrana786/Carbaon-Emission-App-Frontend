import { Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './comonents/Navbar';
import Register from './comonents/Register';
import RegisterSuccess from './comonents/RegisterSuccess';
import Loading from './comonents/Loading';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path="/registersuccess" element={<RegisterSuccess />}/>
      <Route path='loading' element={<Loading />}/>
    </Routes>
    </>
  );
}

export default App;
