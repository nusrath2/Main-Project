import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';

function Scannerregister() {

  const [names,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate =useNavigate()
  const handleSubmit =(e)=>{
    e.preventDefault();
    const data={
      name:names,
      email:email,
      password:password,
      type:1
    }
    fetch('http://127.0.0.1:8000/api/register',{
      method:"post",
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    }).then((res)=>res.json()).then((result)=>{
      console.log(result);
      navigate('/')
    })
  }

  return (
<>
<section className="mt-5">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid mt-5"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 mt-5">
              <form className="mt-5">
                <h1 className="">Register your Scan Center</h1>
                <div data-mdb-input-init className="form-outline mb-4">
                  <label className="form-label" for="form3Example3">
                    Username
                  </label>
                  <input
                    name="name"
                    onChange={(e)=>setName(e.target.value)}
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter Username"
                  />
                </div>
                <div data-mdb-input-init className="form-outline mb-4">
                  <label className="form-label" for="form3Example3">
                    Email address
                  </label>
                  <input
                    name="email"
                    onChange={(e)=>setEmail(e.target.value)}
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                  />
                </div>
                <div data-mdb-input-init className="form-outline mb-3">
                  <label className="form-label" for="form3Example4">
                    Password
                  </label>
                  <input
                    name="password"
                    onChange={(e)=>setPassword(e.target.value)}
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                </div>

                

                <div className="text-center text-lg-start mt-4 pt-2">
                  {/* <Link to=""
                    onclick={handleSubmit}
                    type="button"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Register
                  </Link> */}
                  <button type="submit" className="btn btn-primary btn-lg" onClick={handleSubmit}>Register</button>

                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Already have an account?{" "}
                    <Link to="/" className="link-danger">
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
</> 
 )
}

export default Scannerregister