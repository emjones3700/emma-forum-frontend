import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Link, withRouter} from "react-router-dom"
import axios from "axios"


const ThreadPage = ({match})=>{
    let topicId = match.params.topicId
    return(
        <ul>
            <li></li>
        </ul>
    )

}

export default withRouter(ThreadPage);