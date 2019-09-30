import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom"
import axios from "axios"

const TopicPage = ()=>{
    const [topics, setTopics] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8080/forum_backend/api/v3/topics").then(response=>{
            console.log(response);
            setTopics(response.data);
        })
        
    },[])

    return(
        <ul>
            {topics.map(topic=>{
                return(
                    <li>
                        <Link to={"/topics/"+topic.id+"/threads"} className="link">
                        {topic.name}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default TopicPage;