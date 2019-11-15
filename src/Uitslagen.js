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
            <ul>
                {posts.map(post =>
                    <li>
                        {post.thuis} {post.stand} {post.uit}
                    </li>
                )}
            </ul>
            <Check />
        </div>
    );
}
export default Uitslagen;
// class Uitslagen extends React.Component {
//     render() {
//         const [posts, setPosts] = useState([])

//         // useEffect(() => {
//         //     axios.get('http://localhost:3001/api/wedstrijduitslag')
//         //         .then(res => {
//         //             console.log(res)
//         //         })
//         //         .catch()
//         // })

//         return (
//             <div className="App">
//                 <h1 className='titleOefeningen'>Wedstrijduistslagen</h1>
//                 {/* <ul>
//                     {posts.map(post => <li>
//                         {post.thuis} {post.stand} {post.uit}
//                     </li>
//                     )}
//                 </ul> */}
//                 <Check />
//             </div>
//         )
//     }
// }



