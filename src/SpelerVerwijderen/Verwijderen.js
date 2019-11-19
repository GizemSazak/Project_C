import React, { useState, useEffect, Component } from 'react'
import axios from 'axios'
import './Verwijderen.css'
import Menu from '../Menu/Menu'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Verwijderen() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/api/speler')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch()

    }, [])

    // const [Speler, setSpelers] = useState([
    //     { voornaam: '', achternaam: '' }
    // ])

    // const addSpeler = () => {
    //     setSpelers([...Speler, { voornaam: 'S', achternaam: 'O' }])
    // }

    return (
        <div className="Page">
            <header className="PageHeader">Speler Verwijderen</header>

            <body className="Body">

                <h2 className="BodyHeader">Kies een speler of spelers om te verwijderen</h2>

                {posts.map(post =>
                    <div className="Speler">
                        <button className="Image"  ></button>
                        <div className="Spelernaam">{post.voornaam} {post.achternaam}</div>
                    </div>
                )}

                <FontAwesomeIcon icon={faTrashAlt} className="DeletePlayer" />

            </body>
            <Menu />
        </div>
    );
}

function SpelerOverzicht() {

    // const [spelers] = useState([
    //     { link: "openTab('b1');", title: "Agenda", icon: faCalendar },
    //     { link: "openTab('b1');", title: "Notities", icon: faStickyNote }
    // ]);

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/api/speler')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch()
    }, []);

    return (
        <body className="Body">

            {posts.map(post =>
                <div className="Speler">
                    <div className="Image" />
                    <div className="Spelernaam">{post.voornaam} {post.achternaam}</div>
                </div>
            )}

        </body>
    );
}

// class Verwijderen extends Component {
//     constructor(props) {
//         super(props);

//         this.state = { spelernummer: '' }
//         this.state = { voornaam: '' }
//         this.state = { achternaam: '' }
//         this.state = { email: '' }

//         this.Spelers = this.Spelers.bind(this);
//         this.Submit = this.Submit.bind(this);
//     }

//     Spelers() {
//         const [posts, setPosts] = useState([])

//         useEffect(() => {
//             axios.get('http://localhost:3001/api/speler')
//                 .then(res => {
//                     console.log(res)
//                     setPosts(res.data)
//                 })
//                 .catch()
//         }, [])
//         return (
//             <h>
//                 {posts.map(post =>
//                     <div className="Speler">
//                         <button className="Image" >{''}</button>
//                         <div className="Spelernaam">{post.voornaam} {post.achternaam}</div>
//                     </div>
//                 )}
//             </h>
//         )
//     }

//     Submit() {
//     }

//     render() {
//         return (
//             <div className="Page">
//                 <header className="PageHeader">Speler Verwijderen</header>

//                 <body className="Body">

//                     <h2 className="BodyHeader">Kies een speler of spelers om te verwijderen</h2>
//                     <this.Spelers />

//                     <FontAwesomeIcon icon={faTrashAlt} className="DeletePlayer" />

//                 </body>
//                 <Menu />
//             </div>
//         )
//     }
// }
export default Verwijderen;