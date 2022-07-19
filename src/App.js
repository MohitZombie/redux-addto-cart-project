import './App.css';
import Navbar from './Component/Navbar';
import Shop from './Component/Shop';
import {Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Shop/>} />
    </Routes>
    </>
  );
}

export default App;
