import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Link, withRouter} from "react-router-dom"
import axios from "axios"

const MakePost = ({match}) =>{

const [text, setText] = useState("");
let threadId = match.params.id
let newPost= (e)=> {
    e.preventDefault();
   
   
    axios.post('http://localhost:8080/forum_backend/api/v3/thread/' + threadId + '/post', {sessionID:localStorage.getItem('sessionId'),sessionKey:localStorage.getItem('sessionKey'), threadID: threadId, text: text}).then(response=>{
        window.location='/topics/' + match.params.topicId + '/threads/' + threadId;
    },(error)=>{
        console.log("yeah idk")
   }
   
   )
}

    
return(
    <form class="login" onSubmit={newPost} > 

   
    <div class="username">
    
    <textarea type="text" size="30" name="text" value ={text} onChange={(e)=>setText(e.target.value)} />

</div>




<button type="submit" class="button" value="login">POST</button> 


</form>
)
}

export default MakePost