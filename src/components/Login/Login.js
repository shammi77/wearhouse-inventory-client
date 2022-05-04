// import React, { useState } from "react";
// import "./Login.css";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
// import auth from "../../firebase.init";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [
//     signInWithEmailAndPassword,
//     user,
//     loading,
//     error,
//   ] = useSignInWithEmailAndPassword(auth);
//   const navigate = useNavigate(auth);
//   const location = useLocation();
//   const from = location.state?.from?.pathname || '/';

//   const handleEmailBlur = (event) => {
//     setEmail(event.target.value);
//   };
//   const handlePasswordBlur = (event) => {
//     setPassword(event.target.value);
//   };
//   if(user){
//     navigate(from, {replace:true});
//   }
//   const handleUserSignIn =event => {
//       event.preventDefault();
//       signInWithEmailAndPassword(email, password);
//   }

//   return (
//     <div className="form-container">
//       <div>
//         <h2 className="form-title">Login</h2>
//         <form onSubmit={handleUserSignIn}>
//           <div className="input-group">
//             <label htmlFor="email">Email</label>
//             <input
//               onBlur={handleEmailBlur}
//               type="email"
//               name="email"
//               id=""
//               required
//             />
//           </div>
//           <div className="input-group">
//             <label htmlFor="password">Password</label>
//             <input
//               onBlur={handlePasswordBlur}
//               type="password"
//               name="password"
//               id=""
//               required
//             />
//           </div>
//             <p style={{color:'red'}}>{error?.message }</p>
//             {
//                 loading && <p>Loading...</p>
//             }
//           <input className="form-submit" type="submit" value="Login" required />
//         </form>
//         <p>
//           New to this page ?{" "}
//           <Link className="form-link" to="/signup">
//             Create an Account
//           </Link>
//         </p>

//       </div>
//     </div>
//   );
// };

// export default Login;
import React from "react";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  return (
    <div className="container w-50 mx-auto">
      <h1 className="text-primary text-center mt-4">Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
