import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Signup from './Signup';
import Home from './Home'
import './Login.scss';

function Login() {

  let navigate = useNavigate();

  const accounts = [
    {
        emailId: "trang@gmail.com",
        fullName: "Thuy Trang",
        passWord: "123",
    },
    {
        emailId: "hong@gmail.com",
        fullName: "Hong Nguyen",
        passWord: "158",
    },
    {
        emailId: "kimy@gmail.com",
        fullName: "Kim Ý",
        passWord: "156",
    },
  ]

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  useEffect(() => {

    let key = localStorage.getItem('account');
  
    if (key !== null){
      navigate('/home') 
    }
  })
  

  const handleLogin = () => {
    let a = accounts.find(function(account){
      if ( email === account.emailId && pass === account.passWord){
        localStorage.setItem('account', JSON.stringify(account));
        return true;
      }
      return false;
    }) 

    console.log(a);
    
    if (a !== undefined){
      navigate('/home');
    }
    else {
      alert('Tài khoản hoặc mật khẩu không đúng');
    }
  }

  return (
    <div className='container-grid'>
      <div className='form-1'>
        <form>
          <h2>Login</h2>
          <div className='login-form'>
            <label className='label-form' >Email ID</label><br/>
            <input 
              className='input-form' 
              type="email" name="email_id" 
              value={email}
              onChange = {x => setEmail(x.target.value)}
              required/>
          </div>
          <div className='login-form password-form'>
            <label className='label-form' >Password</label><br/>
            <input 
              className='input-form' 
              type="password" 
              name="password" 
              value={pass}
              onChange = {x => setPass(x.target.value)}
              required/>
            <img className='form_icon_eye' src="/assets/icon/eye-slash-solid.svg" alt="eye-slack"/>
          </div>
          <button onClick={handleLogin} className='btn_signin' type="submit">
            Sign In
          </button>
          <p className="change_form">Don't have an account? 
            <Link to="/signup" id="change-signup" className='change change-signup'> 
              Create new
            </Link>
          </p>
        </form>
      </div>
      <Routes>
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/home" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default Login;
