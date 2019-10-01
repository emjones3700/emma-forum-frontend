import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Link, withRouter} from "react-router-dom"
import axios from "axios"


const ThreadPage = ({match})=>{
  
    
    let threadId = match.params.id;
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8080/forum_backend/api/v3/thread/'+ threadId).then(response=>{
            console.log(response);
            setPosts(response.data.posts)
        })
        
    },[])
    
    return(
        <ul>
    
            {posts.map(post=>{
                return(
                    <li>
                        {post.text}
                    </li>
                )
            })}

        </ul>
    )

}

export default withRouter(ThreadPage);