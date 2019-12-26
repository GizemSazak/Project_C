import React, { useState, useEffect } from 'react';
// import '../Notities/Notities.css';
import Menu from '../Menu/Menu'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Container, Row, Col, Button, FormGroup, FormControl, Form } from "react-bootstrap"

function Teamcode() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/api/registratie')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch()
    }, []);
    if (!localStorage.getItem('Data') || localStorage === null) {
        window.location.href = '/';
    }
    else {
        return (
            <div className="Notitiebody">
                <h1 className='titleNotitiel'>Teamcode</h1>
                <div className="column1"></div>
                <div className="tablerow" >
                    {posts.map(function (post, id) {
                        return (
                            <button id="rowss" >{post.teamcode}</button>
                        )
                    })}
                </div>
                <Menu />
            </div>
        );
    }
}
export default Teamcode;
