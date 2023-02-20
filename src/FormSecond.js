import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faEye } from '@fortawesome/free-solid-svg-icons'
/* eslint-disable no-useless-escape */
function FormSecond(){
    const[email, setEmail] = useState("");
    const[password,setPassword] = useState("");
    let emailData = useRef();
    let passwordData = useRef();
    let mask =useRef();
    const handleEmail = ()=>{
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!email){
            emailData.current.textContent ="Email Field Required";
        }
        else if(!email.match(mailformat)){
            emailData.current.textContent = "Invalid Email Id";
        }
        else{
            emailData.current.textContent = "";
        }
    }
    const handlepassword = ()=>{
        var passFormat =/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{10,12}$/;
        if(!password){
            passwordData.current.textContent ="Password Required";
        }
        else if(!password.match(passFormat)){
            passwordData.current.textContent ="Invalid Password";
        }
        else{
            passwordData.current.textContent = "";
        }
    }
    const HandleMaskUnmask = (e)=>{
        e.preventDefault();
        const type = mask.current.getAttribute("type")=== "password" ? "text":"password";
        mask.current.setAttribute("type",type);
    }
    return(
        <div className="First-form">
            <form>
            <h1>Second-Form</h1>
                <div className="email-box">
                    <label>Email Address</label>
                    <br/>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <input type="text" className="inp"  value={email} onBlur={handleEmail} onChange={(e)=>{setEmail(e.target.value)}}/><br/> 
                    <span className="error" ref={emailData}></span>
                </div>
                <div className="email-box">
                    <label>Password</label>
                    <br/>
                    <FontAwesomeIcon icon={faLock} />
                    <input type="password" className="inp" autoComplete="on"  ref={mask} value={password} onBlur={handlepassword} onChange={(e)=>{setPassword(e.target.value)}}/><FontAwesomeIcon className="eye"  onClick={HandleMaskUnmask} icon={faEye} /><br/>
                    <span className="error" ref={passwordData}></span>
                </div>
                <div className="submit-box">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}
export default FormSecond;