import React, { useState } from "react";
import "./signUp.css"
import { useDispatch } from "react-redux";
import  {userRegisteration} from "../../redux/actions/authAction"

export const SignUp=()=>{
    const dispatch=useDispatch()
    const [userType,setUserType]=useState(0);
    const [firstName,setFirstName]=useState("");
    const [firstNameValidation,setFirstNameValidation]=useState("");
    const [lastName,setLastName]=useState("");
    const [lastNameValidation,setLastNameValidation]=useState("");
    const [email,setEmail]=useState("");
    const [emailValidation,setEmailValidation]=useState("");
    const [mobile,setMobile]=useState("");
    const [mobileValidation,setMobileValidation]=useState("");
    
    let filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
    const handleOnSubmit=(e)=>{
      e.preventDefault()
      const validEmail=filter.test(email)
      
       if(firstName==="")
       setFirstNameValidation("FirstName Cann't be empty")
       else
       setFirstNameValidation("")
       if(lastName==="")
       setLastNameValidation("Lastname cann't be empty")
       else
       setLastNameValidation("")
        
        if(!validEmail)
        setEmailValidation("Please enter a valid Email")
        else
        setEmailValidation("")
        if(mobile==="")
        setMobileValidation("Mobile number cann't be Empty")
        else setMobileValidation("")
        const params={firstName,lastName,email,mobile,userType}
       if(firstNameValidation===""&& lastNameValidation===""&& validEmail&&mobileValidation==="")
        dispatch(userRegisteration(params))
       

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
                  <div className="first">
                    <select className="form-control" name="Sign Up As">
                      <option value="Comapany" onChange={()=>setUserType("Comapany")}>Company</option>
                      <option value="Indivdual" onChange={()=>setUserType("Indivdual")}>Individual</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>First Name</label>
                    <input type="text" className="form-control" name="name" placeholder="First Name" onChange={(e)=>setFirstName(e.target.name)}/>
               <br></br>
                <span>{firstNameValidation}</span>
                  </div>

                  <div className="col-md-6">
                    <label>Last Name</label>
                    <input type="text" className="form-control" name="name" placeholder="Last Name" onChange={(e)=>setLastName(e.target.value)} />
                <br></br>
                 <span>{lastNameValidation}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label>Email</label>
                    <input type="text" className="form-control" name="name" placeholder="Please Fill Your Registered email ID" onChange={(e)=>setEmail(e.target.value)} />
                 <br></br>
                  <span>{emailValidation}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label>Mobile</label>
                    <input type="text" className="form-control" name="name" placeholder="Enter Your Mobile Number" onChange={(e)=>setMobile(e.target.value)} />
                <br></br>
                 <span>{mobileValidation}</span>
                  </div><br />
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <button onClick={handleOnSubmit}  className="btn">Sign Up</button>
                  </div><br />
                  <span>Already Registered?
                    <a href="/login">Login Hear!</a>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div> </div>)
}