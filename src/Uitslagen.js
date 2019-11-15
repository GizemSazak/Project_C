import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Uitslagen.css';
import Check from './components/Menu/Check';
import { Link } from 'react-router-dom';
import axios from 'axios'





function Uitslagen() {

  const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/api/wedstrijduitslag')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch()
    })

    return (
        <div>
            <h1 className='titleOefeningen'>Wedstrijduistslagen</h1>
            
            <p>
                {posts.map(post => <p>
                    {post.thuis} 
                    </p>
                    )}
            </p>
        
            
        </div>
        
    );

    
          
}

export default Uitslagen

