import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Link, withRouter} from "react-router-dom"
import axios from "axios"
import { threadId } from 'worker_threads';


const PostPage = ({match})=>{
  

    let  = match.params.theadId
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8080/forum_backend/api/v3/topics/'+ topicId + '/threads/' + threadId + '/post').then(response=>{
            console.log(response);
            setThreads(response.data)
        })
        
    },[])
    
    return(
        <ul>
            {posts.map(post=>{
                return(
                    <li>
                        <Link to={"/topics/"+topicId+"/threads/"+threadId+"/post"}>
                        {thread.name}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )

}

export default withRouter(PostPage);