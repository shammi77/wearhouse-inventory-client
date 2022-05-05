import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate(auth);
    let errorElement;

    if (error) {
        errorElement = <div>
        <p className='text-danger'>Error: {error.message}</p>
      </div>
          }

      if(user){
          navigate('/home');
      }
    return (
        
        <div className='text-center m-3'>
            {errorElement}
            <Button onClick={()=>signInWithGoogle()} className='btn btn-primary '>google Sign In</Button>
        </div>
    );
};

export default SocialLogin;