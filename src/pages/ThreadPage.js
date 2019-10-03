import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Link, withRouter} from "react-router-dom"
import axios from "axios"


const ThreadPage = ({match})=>{
  

    let threadId = match.params.id;
    let topicId = match.params.topicId
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8080/forum_backend/api/v3/thread/'+ threadId).then(response=>{
            console.log(response);
            setPosts(response.data.posts)
            console.log(localStorage.getItem('sessionKey'))
        })
        
    },[])


    
    return(
        <ul className="chat-thread">
            
            {posts.map(post=>{
                return(
                    
                    <li>
                        {post.text}<br></br>
                        {post.voteTotal} votes
                    </li>
                )
            })}
            <button className="button" onClick={(e)=>window.location='/topics/' + topicId + '/threads/' + threadId + '/makepost'}>post to this thread</button>

        </ul>
    )

}

export default withRouter(ThreadPage);