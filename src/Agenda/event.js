import React, { useState, useEffect, Component } from 'react';
import axios from 'axios'

class event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventt: ''
        }
        this.eventt = this.eventt.bind(this);
    }

    eventt() {
        const [posts, setPosts] = useState([])

        useEffect(() => {
            axios.get('http://localhost:3001/api/agenda')
                .then(res => {
                    console.log(res)
                    setPosts(res.data)
                })
                .catch()
        }, []);

        var x = [posts.map(function (post, id) {
            return (post.dag
            )
        })]
        console.log(x)

        var fin = [];
        x.forEach(myFunction);

        function myFunction(value) {
            fin = fin + value + ""
        }
        var arraydate = fin.split(",")
        var eventttt = []

        function secondFunction() {
            for (var i = 0; i < arraydate.length; i++) {
                eventttt.push({ date: arraydate[i], events: [{}] })
            }
        }
        secondFunction()
        console.log(eventttt)
        console.log(fin)
        localStorage.setItem("eventsObjects", JSON.stringify(eventttt))

        return (<div>{fin}</div>)
    }
    render() {
        return (<div><this.eventt /></div>
        )
    }
}
export default event;
