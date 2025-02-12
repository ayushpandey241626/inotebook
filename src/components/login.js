import React , { useState } from 'react'
import { useNavigate  } from 'react-router-dom';
const Login = (props) => {
    let history = useNavigate ();
    const [credentials, setcredentials] = useState({email:"",password:""})
    
    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
      };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email:credentials.email,password:credentials.password}),
          });
          const json = await response.json();
          console.log(json);
          if(json.success){
            localStorage.setItem('authToken',json.authToken)
            props.showAlert("Logged in successfully","success")
            history("/")
          } else {
            props.showAlert("Invalid Credentials","danger")
          }
    }
  return (
    <>
        <h2>Login to continue to iNoteBook</h2>
                <form onSubmit={handleSubmit} >
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" onChange={onChange} value={credentials.email} className="form-control" id="email" name='email' aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" onChange={onChange} value={credentials.password} className="form-control"  name='password' id="password"/>
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
    
    
    
    </>
  )
}

export default Login