import React, { useState, useEffect, Component } from 'react';
import Menu from '../Menu/Menu';
import "./tactieken.css";
import axios from 'axios'

class tactieken_verwijderen extends Component {

    tacktieken() {
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


    Delete(tactieknaam, tactiekplaatje) {

        const request = new Request('http://localhost:3001/api/speler', {
            method: 'DELETE',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify({ 'tactieknaam': tactieknaam, 'tacktiekplaatje': tactiekplaatje })
        });
        fetch(request)
            .then(response => { response.json().then(data => { }); })
            .catch(err => { console.log(err); });
        window.location.reload()
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

export default tactieken_verwijderen;

