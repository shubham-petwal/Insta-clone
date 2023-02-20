import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faEye } from '@fortawesome/free-solid-svg-icons'
/* eslint-disable no-useless-escape */
function FormFirst(){
    const[emailInp,setEmailInp] = useState("")
    const[passInp,setPassInp] = useState("")
    let emailData = useRef();
    let passwordData = useRef();
    let mask =useRef();
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passFormat =/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{10,12}$/;
    const handleFORM = (e)=>{
        e.preventDefault();
        if(!emailInp){
            emailData.current.textContent ="Email Field Required";
        }
        else if(!emailInp.match(mailformat)){
            emailData.current.textContent = "Invalid Email Id";
        }
        else{
            emailData.current.textContent = "";
        }
        if(!passInp){
            passwordData.current.textContent ="Password Required";
        }
        else if(!passInp.match(passFormat)){
            passwordData.current.textContent ="Invalid Password";
        }
        else{
            passwordData.current.textContent = "";
        }

    }
    const HandleMaskUnmask = (e)=>{
        const type = mask.current.getAttribute("type")=== "password" ? "text":"password";
        mask.current.setAttribute("type",type);

    }
    return(
        <div className="First-form">
        <form onSubmit={handleFORM}>
            <h1>First-Form</h1>
            <div className="email-box">
                <label>Email Address</label>
                <br/>
                <FontAwesomeIcon icon={faEnvelope} />
                <input type="text" className="inp" autoComplete="on"  value={emailInp}  onChange={(e)=>{setEmailInp(e.target.value)}}/><br/>
                <span className="error"  ref={emailData}></span>
            </div>
            <div className="email-box">
                <label>Password</label>
                <br/>
                <FontAwesomeIcon icon={faLock} />
                <input type="password" className="inp" autoComplete="on"  ref={mask} value={passInp}   onChange={(e)=>{setPassInp(e.target.value)}}/><FontAwesomeIcon className="eye" onClick={HandleMaskUnmask} icon={faEye} /><br/>
                <span className="error"  ref={passwordData}></span>
            </div>
            <div className="submit-box">
                <button type="submit">Login</button>
            </div>
        </form>
    </div>
    );
}
export default FormFirst;