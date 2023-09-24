
import { Route, Routes } from 'react-router-dom';
import './App.css'
import { Signup } from './Pages/Signup';
import { SignIn } from './Pages/Signin';
import ForgetPassword from './Pages/ForgetPassword';
import { GetStarted } from './Pages/GetStarted';
import Faq from './Pages/Faq';
import { Dashboard } from './Pages/Dashboard';

function App() {
  return (
    <div >
        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/forgetpassword' element={<ForgetPassword/>}/>
          <Route path='/' element={<GetStarted/>}/>
          <Route path='/faq' element={<Faq/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
  
    </div>
  );
}

export default App;
