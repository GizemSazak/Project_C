import React, { Component, useState, useEffect } from 'react';
import axios from 'axios'


  const [posts, setPosts] = useState([])

        useEffect(() => {
            axios.get('http://localhost:3001/api/agenda')
                .then(res => {
                    console.log(res)
                    setPosts(res.data)
                })
                .catch()
        }, []);

      
     const   events = [
          posts.map(function(post, id){
                return(
                            {
                              date: post.datum,
                              events: [{}]
                            }
                )
          })
        ];





export { events };
