import IndexCmp from "./components";
import { Routes , Route  } from 'react-router-dom'
import 'antd/dist/antd.css';
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import Register from "./pages/register/register";
import Admin from "./pages/adminPanel/admin";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <IndexCmp />
       <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/home" element={<Home /> } />
         <Route path="/register" element={<Register />} />
         <Route path="/admin" element={<Admin />} />
       </Routes>
    </>
  );
}

export default App;
