import React, { useState } from "react";
import "./signUp.css"
import { useDispatch } from "react-redux";
import  {userLogin} from "../../redux/actions/authAction"

export const Login=()=>{
    const dispatch=useDispatch()
    const [email,setEmail]=useState("");
    const [emailValidation,setEmailValidation]=useState("");
   const [password,setPassword]=useState("")
   const [passwordValidate,setPasswordValidate]=useState("")
    let filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
    const handleOnSubmit=(e)=>{
      e.preventDefault()
      const validEmail=filter.test(email)
      
        if(!validEmail)
        setEmailValidation("Please enter a valid Email")
        else
        setEmailValidation("")
        if(password==="")
        setPasswordValidate("Password cann't be Empty")
        else 
        setPasswordValidate("")
       const params={email,password}
       if( validEmail&&passwordValidate==="")
        dispatch(userLogin(params))
       

    }

    return(<div style={{backgroundcolor:" #82E0AA "}}>
       <div className="container-fluid">
        <div className="row">
          <div className="col-sm-7">
            <div className="row">
              <div className="col-sm-12">
                <h1>Ebench</h1>
                <h2>solution</h2>
              </div>
            </div>
          </div>
          <div className=" col-sm-5" style={{marginTop:"100px"}}>
            <form className="form" style={{marginTop:"20px",marginleft:"650px"}}>
              <div className="container">
                
                <div className="row">
                  <div className="col-md-12">
                    <label>Email</label>
                    <input type="text" className="form-control" name="email" placeholder="Please Fill Your Registered email ID" onChange={(e)=>setEmail(e.target.value)} />
                 <br></br>
                  <span>{emailValidation}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label>Password</label>
                    <input type="text" className="form-control" name="password" placeholder="Enter Your Password" onChange={(e)=>setPassword(e.target.value)} />
                <br></br>
                 <span>{passwordValidate}</span>
                  </div><br />
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <button onClick={handleOnSubmit}  className="btn">Login</button>
                  </div><br />
                  
                </div>
              </div>
            </form>
          </div>
        </div>
      </div> </div>)
}