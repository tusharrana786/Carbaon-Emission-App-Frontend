import { Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './comonents/Navbar';
import Register from './comonents/Register';
import RegisterSuccess from './comonents/RegisterSuccess';
import Loading from './comonents/Loading';
import Implementation from './comonents/Implementations';
import DoughnutChart from './comonents/DoughnutChart';
import ProgressChart from './comonents/ProgressChart';
import StackedChart from './comonents/StackedChart';
import DashBoard from './comonents/Dashboard';
import Test from './comonents/Test';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path="/registersuccess" element={<RegisterSuccess />}/>
      <Route path='loading' element={<Loading />}/>
      <Route path='/implementations' element={<Implementation />} />
      <Route path='/dashboard' element={<DashBoard />}/>
      <Route path='/test' element={<Test />}/>
    </Routes>
    </>
  );
}

export default App;
