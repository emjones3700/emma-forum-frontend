import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Link, withRouter} from "react-router-dom"
import axios from "axios"


const MakeThread = ({match})=>{
    let topicId = match.params.topicId
    const [name, setName] = useState("");
    let newThread= (e)=> {
        e.preventDefault();
       
       
        axios.post('http://localhost:8080/forum_backend/api/v3/thread', {sessionID:localStorage.getItem('sessionId'),sessionKey:localStorage.getItem('sessionKey'), topicID:topicId, name: name}).then(response=>{
            window.location='/topics/' + match.params.topicId + '/threads'
        },(error)=>{
            console.log("yeah idk")
       }
       
       )
    }

        
return(
    <form class="login" onSubmit={newThread} > 

   
    <div class="username">
    
    <input type="text" name="text" value ={name} onChange={(e)=>setName(e.target.value)} />

</div>




<button type="submit" class="button" value="login">make new thread</button> 


</form>
)

}

export default MakeThread;