import React, { useRef } from "react";
import {useFormik} from "formik";
import {signUpSchema} from "./schemas";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock,faEye } from '@fortawesome/free-solid-svg-icons'
function FormicForm(){
    let mask =useRef();
    const initialValues = {
        email: "",
        password: ""
    }
    const {values, errors,handleBlur,touched, handleChange, handleSubmit} = useFormik({
        initialValues:initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values)=>{
            console.log(values);
        }
    });
    const HandleMaskUnmask = (e)=>{
        e.preventDefault();
        const type = mask.current.getAttribute("type")=== "password" ? "text":"password";
        mask.current.setAttribute("type",type);
    }
    return(
        <div className="First-form">
        <form onSubmit={handleSubmit}>
        <h1>Form Using Formic</h1>
            <div className="email-box">
                <label>Email Address</label>
                <br/>
                <FontAwesomeIcon icon={faEnvelope} />
                <input className="inp" type="text" onBlur={handleBlur} name="email" onChange={handleChange} value={values.email}/><br/>
                {errors.email && touched.email?<span className="error">{errors.email}</span>:null }
            </div>
            <div className="email-box">
                <label>Password</label>
                <br/>
                <FontAwesomeIcon icon={faLock} />
                <input className="inp" type="password" ref={mask} onBlur={handleBlur} autoComplete="on" value={values.password} onChange={handleChange} name="password" /><FontAwesomeIcon className="eye"  onClick={HandleMaskUnmask} icon={faEye} /><br/>
                {errors.password && touched.password?<span className="error">{errors.password}</span>:null }
            </div>
            <div className="submit-box">
                <button type="submit">Login</button>
            </div>
        </form>
    </div>
    );
}
export default FormicForm;