import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import SocialLogin from "../Login/SocialLogin/SocialLogin";


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

  const handleEmailBlur =event =>{
      setEmail(event.target.value);
  }
  const handlePasswordBlur =event =>{
      setPassword(event.target.value);
  }
  const handleConfirmPasswordBlur =event =>{
      setConfirmPassword(event.target.value);
  }
  if(user){
      navigate('/home');
  }
  const handleCreateUser = event =>{
      event.preventDefault();
      const email = event.target.email.value;
      const password = event.target.password.value;
      if(password !== confirmPassword){
          setError('your two passwords didnot match');
          return;
      }
      if(password.length<6){
            setError('Password must be at least 6 characters');
            return;
      }
      createUserWithEmailAndPassword(email, password);
  }

  return (
    <div>
      <div className="form-container">
        <div>
          <h2 className="form-title">Sign Up</h2>
          <form onSubmit={handleCreateUser}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
            </div>
            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
            </div>
            <p style={{color: 'red'}}>{error}</p>
            <input
              className="form-submit"
              type="submit"
              value="Sign Up"
              required
            />
          </form>
          <p>
            Already Have an Account ?{" "}
            <Link className="form-link" to="/login">
              Log In
            </Link>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
