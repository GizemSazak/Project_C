import React, { useState, useEffect } from 'react';
import './Uitslagen.css';
import Menu from './Menu/Menu';
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
    }, []);

    return (
        <div className="App">
            <h1 className='titleOefeningen'>Wedstrijduitslagen</h1>
            <div className="uitslagBody">
                <tbody id="tt">
                    <tr >
                        <th id="HtableL" >Week</th>
                        <th id="HtableR" >Thuis</th>
                        <th id="HtableR" >Stand</th>
                        <th id="HtableR" >Uit</th>
                    </tr>
                </tbody>
                {posts.map(function (post, id) {
                    return (<Link className="linkk" to={{ pathname: "/verslag", id: post.id, verslag: post.verslag, thuis: post.thuis, stand: post.stand, uit: post.uit }}>

                        <tr key={id} >
                            <th id="tableL" >
                                {post.id}
                            </th>
                            <td id="tableR" >
                                {post.thuis}
                            </td>
                            <td id="tableR" >
                                {post.stand}
                            </td>
                            <td id="tableR" >
                                {post.uit}
                            </td>
                        </tr>

                    </Link>
                    )
                })}

                <Link to="/uitslagtoevoegen"><button className="addbutton">+</button></Link>
            </div>
            <Menu />
        </div>
    );
}
export default Uitslagen;




