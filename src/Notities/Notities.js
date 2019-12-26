import React, { useState, useEffect, Component } from 'react';
import './Notities.css';
import Check from '../Menu/Check'
import { Link } from 'react-router-dom';
import axios from 'axios'
class Notities extends Component {
    constructor(props) {
        super(props);
      }

    NotiteBody = () => {
        const [posts, setPosts] = useState([])

        useEffect(() => {
            axios.get('http://localhost:3001/api/notities')
                .then(res => {
                    console.log(res)
                    setPosts(res.data)
                })
                .catch()
        }, []);
        if(!localStorage.getItem('Data') || localStorage === null){
            window.location.href = '/';
        }
        else{ 
        return (
            <div className="Notitiebody">
                <h1 className='titleNotitiel'>Notities</h1>
                <div className="column1"></div>
                <Link  id = "Toevoegencolor" to="./Notities_toevoegen">
                    <button id="Toevoegen" type="button">Notities Toevoegen</button>
                </Link>
                <div className="tablerow" >
                    {posts.map(function (post, id) {
                        return (<Link refresh="true" className="linkk" to={{ pathname: "/Notities_beschrijven", id: post.id, titel: post.titel, notitie: post.notitie }}>
                            <button id="rowss" >
                                {post.titel}
                            </button>
                        </Link>
                        )

                    })}

                </div>
                <Check />
            </div>
        );
                }

    }

    render(){
        return(
            <this.NotiteBody />
        )
    }


    

    
}
export default Notities;
