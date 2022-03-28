import React, { useState }  from 'react';
import Auth from "../auth/Auth"

import MuiAlert from "@material-ui/lab/Alert";

export default function Login(props) {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    Auth.onAuthentication();
    Auth.saveToken(email);
    props.history.push('/course');    
  };


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

  const submitForm = () => {
    if (email === "" || password === "") {
      alert("Fields are required");
      return;
    }
  };
    return ( 
      <section id="entry-page">
        <div className="login">
         <h1>Please Log In to evalute the course:</h1>
      <form className='form-login' onSubmit={handleSubmit}>
        <label>
          <p>Email</p> 
          <input type="text" onChange={e => setEmail(e.target.value)} required/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} required/>
        </label>
        <div>
          <button className='btn' onClick={submitForm} type="submit">Login</button>
        </div>
      </form>
      {error && (
        <Alert severity="error" onClick={() => setError(null)}>
          {props.error || error}
        </Alert>
      )}
        </div>
        </section>
     );
}