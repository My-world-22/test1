import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {PostDetails} from './components/main/PostDetails'
import { Main } from './components/main/Main';
import Login from './components/login/Login';
import MainUser from './user/posts/MainUser'
import Register from './components/register/Register';
import {NotFound}  from './components/main/NotFound';
function App() {
  return (
    <BrowserRouter>
    <Routes>
          <Route path='*' element={<NotFound/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Main />} />
          <Route path='/user_home/:id' element={<MainUser/>}/>
          <Route path='/post/:id' element={<PostDetails/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
