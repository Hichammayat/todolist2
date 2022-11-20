import React from "react";
import { useState,useEffect, } from "react";
import {  useNavigate } from 'react-router-dom';




const Signin =()=>{
    const navigate = useNavigate()
    const User = {
        email: "",
        password: ""
      };
    const [formValues,setformValues]= useState(User);
    const [formerrors,setFormerrors]= useState({});
    const [isSubmit,setIsSubmit]= useState(false);
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setformValues({...formValues,[name]: value});

    };
    

    const handelSubmit=(e)=>{
        e.preventDefault();
        setFormerrors(validate(formValues));
        setIsSubmit(true);

    }
    useEffect(()=>{
        console.log(formerrors);
        if(Object.keys(formerrors).length === 0 && isSubmit){
            console.log(formValues);
        }
    },[formerrors]);

    const validate=(values)=>{
        const errors ={};
        const regex =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if(!values.email){
            errors.email = "email is required"
        } else if(!regex.test(values.email)){
            errors.email="this is not a valid email format"
        }
        if(!values.password){
            errors.password = "email is required"
        }
        return errors;


    }
   
    return(
        <>
        
        <form onSubmit={handelSubmit} className="signin-page">
            
            <h2>please enter your email</h2>
            <div className="signin-cantainer">
                <div>
                    <label htmlFor="email">email</label>
                    <input name="email" value={formValues.email} onChange={handleChange} className="gmail" type="text" placeholder="gmail"/>
                    <p>{formerrors.email}</p>
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input name="password" value={formValues.password} onChange={handleChange} className="password" type="password" placeholder="password" />
                    <p>{formerrors.password}</p>  
                
                </div>
                
                <button onClick={()=> navigate('/todo')} className="Signin-btn">Signin</button>
            
            </div>
        </form>
        </>
    )
}
export default Signin