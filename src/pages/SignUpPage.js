import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Link, withRouter} from "react-router-dom"
import axios from "axios"


const SignUpPage = () =>{
    const [userName, setUserName] = useState("");
    const [password,setPassword] = useState("");
    
    let newUser= (e)=> {
    e.preventDefault();
    
    alert(userName+" "+password);
    axios.post('http://localhost:8080/forum_backend/api/v3/users', {email:userName,password:password}).then((response)=>{
        localStorage.setItem("sessionId", response.data.sessionID);
        localStorage.setItem("sessionKey", response.data.sessionKey);
           
        window.location="/topics"

    },(error)=>{
         console.log("bad")
    }
    
    )
}
    
return(
    <form onSubmit={newUser} class="login"> 

    So you've decided to join us. Great!
    <div class="username">
    <label>Email </label>
    <input type="text" name="username" value = {userName} onChange={(e)=>setUserName(e.target.value)} />

</div>

<div class="password">
  <label>Password </label>
    <input value={password} onChange={e=>setPassword(e.target.value)} type="password" name="username"/>
</div>


<button type="submit" class="button" value="login">SIGN UP</button> 


</form>
)

}

export default SignUpPage;