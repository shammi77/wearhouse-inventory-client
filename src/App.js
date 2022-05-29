
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Additional from './components/Additional/Additional';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

import InvenTory from './components/InvenTory/InvenTory';
import PrivateRoute from './authentication/PrivateRoute';
// import RequireAuth from './components/RequireAuth/RequireAuth';


function App() {
  return (
    <div>
      <h1 className='text-center w-100 m-4 text-warning'>Dresses Inventory</h1>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path='/additional' element={<Additional></Additional>}></Route>
        <Route path='/inventory' element={
          <PrivateRoute>
            <InvenTory></InvenTory>
          </PrivateRoute>
          }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        
      
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
