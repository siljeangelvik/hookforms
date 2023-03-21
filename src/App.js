import './main.css';
import {Routes, Route} from "react-router-dom";
import Navbar from './components/navigation/navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </>
    );
}

export default App;