import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Link, withRouter} from "react-router-dom"
import axios from "axios"


const ThreadPage = ({match})=>{
  

    let topicId = match.params.topicId
    const [threads, setThreads] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8080/forum_backend/api/v3/topics/'+ topicId + '/threads').then(response=>{
            console.log(response);
            setThreads(response.data)
        })
        
    },[])
    
    return(
        <ul>
            <button>create new thread</button>
            {threads.map(thread=>{
                return(
                    <li>
                        <Link to={"/topics/"+topicId+"/threads/"+thread.id} className="link">
                        {thread.name}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )

}

export default withRouter(ThreadPage);