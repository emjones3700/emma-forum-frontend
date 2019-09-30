import React,{useState, useEffect} from 'react';


const SignUpPage = ()=>{
    const [usename, setUsername] = useState("");
    let newUser= ()=> {
       alert("nice");
    }
    
return(
<form onSubmit={newUser} class="login"> 

    So you've decided to join. Great!
    <div class="username">
    <label>Email </label>
    <input type="text" name="username"/>

</div>

<div class="password">
  <label>Password </label>
    <input type="text" name="username"/>
</div>


<button type="submit" class="login-button" value="login">SIGN UP</button> 

</form>
)

}

export default SignUpPage;