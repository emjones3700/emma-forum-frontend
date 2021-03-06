import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Link, withRouter} from "react-router-dom"
import axios from "axios"

const LoginPage = ({match})=>{

    const [userName, setUserName] = useState("")
    const [password,setPassword] = useState("")
    // const [sessionId, setSessionId] = useState();
    let newUser= (e)=> {
        e.preventDefault();
       alert(userName+" "+password);
       axios.post('http://localhost:8080/forum_backend/api/v3/login', {email:userName,password:password}).then((response)=>{
            console.log(response.data.sessionID)
            localStorage.setItem("sessionId", response.data.sessionID);
            localStorage.setItem("sessionKey", response.data.sessionKey);
        
            window.location="/topics"

       },(error)=>{
            console.log("yeah idk")
       }
       
       )
    }


    // (e)=>setPassword(e.target.value)

return(
<form onSubmit={newUser} class="login"> 

    Welcome Back!
    <div class="username">
    <label>Email </label>
    <input type="text" name="username" value = {userName} onChange={(e)=>setUserName(e.target.value)} />

</div>

<div class="password">
  <label>Password </label>
    <input value={password} onChange={e=>setPassword(e.target.value)} type="password" name="password"/>
</div>


<button type="submit" class="button" value="login">LOGIN</button> 


    Don't have an account? 
    <Link to={"/signup"} className="link">
                        
                        Sign up.</Link>


</form>
)

}

export default withRouter(LoginPage);