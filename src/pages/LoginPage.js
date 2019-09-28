import React from 'react';


const LoginPage = ({match})=>{
return(
<div class="login">
  
    <div class="username">
    <label>Email </label>
    <input type="text" name="username"/>

</div>

<div class="password">
  <label>Password </label>
    <input type="text" name="username"/>
</div>

<button class="login-button"> 
    login
</button>

    Don't have an account? Sign up.

</div>
)
}

export default LoginPage;