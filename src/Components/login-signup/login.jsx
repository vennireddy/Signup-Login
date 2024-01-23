import React, { useState } from "react";
import './login.css' 

const LoginSignup = () => {
    const[action,setAction] = useState("Signup");


    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}
                    
                </div>
           
<div className="underline"></div>
</div>
<div className="inputs">
    {action==="Login"?<div></div>:<div className="input">
        <img src=" " alt="" />
        <input type="text" placeholder="Name" />
    </div>}
    <div className="input">
        <img src=" " alt="" />
        <input type="email" placeholder='E-mail Id' />
    </div>
    <div className="input">
        <img src=" " alt="" />
        <input type="password" placeholder="Password"/>
    </div>
</div>

{action==="Signup"?<div></div>:<div className="forgot-password">Forgot-password? <span>Click Here</span></div>}
<div className="submitcontainer">
    <div className={action==="Login"?"submit gray":"submit"} onClick={() => {setAction("Signup")}}>Sign up</div>
    <div className={action==="Signup"?"submit gray":"submit"} onClick={() => {setAction("Login")}}>Login</div>
</div>
        </div>
    )
}

export default LoginSignup

