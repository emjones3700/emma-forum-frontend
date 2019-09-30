import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Link, withRouter} from "react-router-dom"
import axios from "axios"
import { threadId } from 'worker_threads';


const PostPage = ({match})=>{
  

    let threadId = match.params.theadId
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8080/forum_backend/api/v3/thread/' + threadId + '/post').then(response=>{
            console.log(response);
            setPosts(response.data)
        })
        
    },[])
    
    return(
       
        <ul>
             
            {posts.map(post=>{
                return(
                    <li>
                       hi
                        {/* {post.text} */}
                        
                    </li>
                )
            })}
        </ul>
    )

}

export default withRouter(PostPage);