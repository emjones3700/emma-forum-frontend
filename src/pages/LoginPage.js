import React from 'react';


const LoginPage = ({match})=>{
return(
<div class="login">
  
    <div class="username">
    <label>Username </label>
    <input type="text" name="username"/>
</div>

<div class="password">
  <label>Password</label>
    <input type="text" name="username"/>
</div>

<button class="login-button"> 
    login
</button>

</div>
)
}

export default LoginPage;