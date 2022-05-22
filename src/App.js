import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/navbar/Navbar';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
import Admin from './pages/Admin';




function App() {
  return (
    <div>
      
      <Router>
        <Navbar></Navbar>
        <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/cart" element={<Cart />}></Route>
              <Route exact path="/admin" element={<Admin />}></Route>
              
            </Routes>
      </Router>
      
    </div>
  );
}

export default App;
