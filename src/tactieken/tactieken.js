import React, { useState, useEffect, Component } from 'react';
import Menu from '../Menu/Menu';
import "./tactieken.css";
import axios from 'axios'

class tactieken extends Component {

    viewtacktieken() {
        const [posts, setPosts] = useState([])
        useEffect(() => {
            axios.get('http://localhost:3001/api/tacktieken')
                .then(res => {
                    console.log(res)
                    setPosts(res.data)
                })
                .catch()
        }, []);

        return (
            <div class="roww">

                {posts.map(function (post, id) {
                    return (
                        <div class="columnn">
                        </div>
                    )
                })}
            </div>

        )

    }


    render() {
        return (
            <div className="app">


                <a href="./tactieken_toevoegen">
                    <button className="addtactiek">+</button>
                </a>


                <this.viewtacktieken />
                <Menu />
            </div>

        );
    }


}

export default tactieken;

