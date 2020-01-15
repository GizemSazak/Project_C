import React, { Component, useState, useEffect } from 'react'
import Menu from '../Menu/Menu'
import axios from 'axios'
import './Aanwezigheid.css'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col } from "react-bootstrap"
import { check } from 'express-validator/check'

const date = new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear()


class Aanwezigheid extends Component {
    constructor(props) {
        super(props);

        this.togglecheck = this.togglecheck.bind(this);
        this.Spelers = this.Spelers.bind(this);
        this.state = {
            todaysdate: new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear()
        
        }
    }

    newlist(){
        const request = new Request('http://localhost:3001/api/aanwezigheidnewlist', {
            method: 'PUT',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify({ 'datum': this.state.todaysdate })
        });
        fetch(request)
            .then(response => {
                response.json().then(data => { });
            })
            .catch(err => {
                console.log(err);
            });
            window.location.reload()
    }


    togglecheck(speler_id, present) {
        //Send state to the server code
        const request = new Request('http://localhost:3001/api/aanwezigheid', {
            method: 'PUT',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify({ 'datum': this.state.todaysdate, 'aanwezig': present, 'speler_id': speler_id })
        });
        fetch(request)
            .then(response => {
                response.json().then(data => { });
            })
            .catch(err => {
                console.log(err);
            });
    }

    getupdatedlist(){
        window.location.reload()
    }

    Spelers() {
        const [posts, setPosts] = useState([])

        useEffect(() => {
            axios.get('http://localhost:3001/api/aanwezigheid')
                .then(res => {
                    console.log(res)
                    setPosts(res.data)
                })
                .catch()
        }, [])

        const [posts2, setPosts2] = useState([])

        useEffect(() => {
            axios.get('http://localhost:3001/api/aanwezigheid')
                .then(res => {
                    console.log(res)
                    setPosts2(res.data)
                })
                .catch()
        }, [])

        const filterdate = posts.filter(post => {
            return (post.datum === this.state.todaysdate)
          });
          console.log(filterdate.length==0)

         

        return (
            
            <div className="Spelersrow">
                <div className='Spelerscolumn'>
                
                    <div className="ColumnHeader1">Naam</div>
                    {filterdate.map(post =>
                        <div>
                            <div className="Speler">{post.voornaam} {post.achternaam}</div>
                        </div>)}
                    
                </div>

                <div className='Spelerscolumn'>
                    <div className="ColumnHeader2">-</div>
                    {filterdate.map(post =>
                        <div className="Aanwezigheidicons">
                            {/* <button onClick={() => this.Submit(post.voornaam, post.id, this.state.aanwezig, this.state.datum)}>test</button> */}

                            <a onClick={() => this.togglecheck(post.id, post.aanwezig = true)}>
                            <FontAwesomeIcon icon={faCheckCircle} className={post.aanwezig ? "checkTrue" : "Aanwezigheidsicons"} /> {" "}

                            </a>{"   "}
                            <a className="crossTrue" onClick={() => this.togglecheck(post.id, post.aanwezig = false)}>
                            <FontAwesomeIcon icon={faTimesCircle} className={post.aanwezig===false ? "crossTrue" : "Aanwezigheidsicons"} />
                
                            </a>

                        </div>)}
                    
                </div>

                <div className='Spelerscolumn'>
                    <div className="ColumnHeader3">Aanwezigheid</div>
                    {filterdate.map(post =>
                        <div>
                          {post.aanwezig != null &&
                            <div className="Speler">{post.aanwezig.toString()=='true'&&'aanwezig'}
                                                    {post.aanwezig.toString()=='false'&&'afwezig'}</div>}
                        {post.aanwezig == null &&
                        <div className="Speler">{"-"}</div>}                         
                          
                        </div>)}
                    
                </div>
                <button onClick={()=>this.newlist()}>newlist</button>
                <button onClick={()=>this.getupdatedlist()}>apply</button>
            </div>
            
        )
    }

    render() {
        return (
            <Container className="Background text-center">
                <Row>
                    {/* Menu */}
                    <Col xs={3} sm={1} lg={1} className="p-0"><Menu /></Col>

                    <Col xs={9} sm={11} lg={11} className="d-flex flex-column justify-content-end text-white">
                        {/* Page Header */}
                        <Row>
                            <Col className="py-5"><h4>Aanwezigheid</h4></Col>
                        </Row>
                        {/* Page Body */}
                        <Row className="Body pt-4 p-2 h-90% flex-column align-content-center" >
                        <div className="p-2" style={{ backgroundColor: "rgb(0, 100, 0)", borderRadius: "10px" }}>
                            <button onClick= {()=>this.setState({todaysdate: (parseInt(this.state.todaysdate) - 1) + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear()})}>-</button> {'        '}
                            {this.state.todaysdate}{'       '}
                            <button onClick= {()=>this.setState({todaysdate: (parseInt(this.state.todaysdate) + 1) + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear()})}>-</button> {'        '}

                            </div>
                            <this.Spelers />
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Aanwezigheid;
