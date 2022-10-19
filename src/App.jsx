import IndexCmp from "./components";
import { Routes , Route  } from 'react-router-dom'
import '../node_modules/antd/dist/antd.min.css'
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import Register from "./pages/register/register";
import Admin from "./pages/adminPanel/admin";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddPost from "./pages/post/addPost";
import Clipboard from "./pages/copytext/copyText";

function App() {
  return (
    <>
       <IndexCmp />
       <Routes>
         <Route path="/home" element={<Home /> } />
         <Route path="/register" element={<Register />} />
         <Route path="/admin" element={<Admin />} />
         <Route path="/addPost" element={<AddPost />} />
         <Route path="/clipboard" element={<Clipboard />} />
         <Route path="/" element={<Login />} />
       </Routes>
    </>
  );
}

export default App;
