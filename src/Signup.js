import { useNavigate } from "react-router-dom";
import './Login.scss';

function Content() {

    let navigate = useNavigate();
    return (
        <div className='container-grid'>
           <div className='form-2'>
                <form action="" method="get">
                <h2>Sign up</h2>
                <div className='signup-form-2'>
                    <label className='label-form' >Full name</label><br/>
                    <input 
                        className='input-form' 
                        type="email" 
                        required/>
                </div>
                <div className='signup-form'>
                    <label className='label-form' >Email ID</label><br/>
                    <input 
                        className='input-form' 
                        type="email"  
                        required/>
                </div>
                <div className='signup-formlogin-form password-form'>
                    <label className='label-form' >Password</label><br/>
                    <input 
                        className='input-form' 
                        type="password" 
                        id="password" required/>
                    <img className='form_icon_eye' src="/assets/icon/eye-slash-solid.svg" alt="eye-slack"/>
                </div>
                <div className='signup-form password-form'>
                    <label className='label-form' >Confirm Password</label><br/>
                    <input
                        className='input-form' 
                        type="password" 
                        required/>
                    <img className='form_icon_eye' src="/assets/icon/eye-slash-solid.svg" alt="eye-slack"/>
                </div>
                <button className='btn_signin' type="submit" >
                    Sign Up
                </button>
                <p className="change_form">I had an account. 
                    <button onClick={() => navigate('/')}  id="change-signin"
                        className='change change-signin'
                    > 
                    Sign in now
                    </button>
                </p>
                </form>
            </div>
        </div>
    )
}

export default Content;