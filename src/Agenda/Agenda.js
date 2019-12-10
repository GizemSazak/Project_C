import './Agenda.css';
import Check from '../Menu/Check'
import React, { Component, useState, useEffect  } from 'react';
import moment from 'moment';
import 'react-day-picker/lib/style.css';
import axios from 'axios'
import { Link } from 'react-router-dom';

class Agenda extends Component {
  state = {
    dateContext: moment(),
    today: moment(),
    showMonthPopup: false,
    showYearPopup: false,
    selectedDay: moment().format('D'),
    activitydate: false
    
}

constructor(props) {
    super(props);
    this.width = props.width || "350px";
    this.style = props.style || {};
    this.style.width = this.width; // add this
    this.handleDayClick = this.handleDayClick.bind(this);

    
}
handleDayClick(day, { selected }) {
  this.setState({
    selectedDay: selected ? undefined : day,
    
  });
}
weekdays = moment.weekdays(); //["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"]
weekdaysShort = moment.weekdaysShort(); // ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
months = moment.months();
year = () => {
    return this.state.dateContext.format("Y");
}
month = () => {
    return this.state.dateContext.format("MMMM");
}
daysInMonth = () => {
    return this.state.dateContext.daysInMonth();
}
currentDate = () => {
    console.log("currentDate: ", this.state.dateContext.get("date"));
    return this.state.dateContext.get("date");
}
currentDay = () => {
    return this.state.dateContext.format("D");
}

firstDayOfMonth = () => {
    let dateContext = this.state.dateContext;
    let firstDay = moment(dateContext).startOf('month').format('d'); // Day of week 0...1..5...6
    return firstDay;
}

setMonth = (month) => {
    let monthNo = this.months.indexOf(month);
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).set("month", monthNo);
    this.setState({
        dateContext: dateContext
    });
}

nextMonth = () => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).add(1, "month");
    this.setState({
        dateContext: dateContext
    });
    this.props.onNextMonth && this.props.onNextMonth();
}

prevMonth = () => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).subtract(1, "month");
    this.setState({
        dateContext: dateContext
    });
    this.props.onPrevMonth && this.props.onPrevMonth();
}

onSelectChange = (e, data) => {
    this.setMonth(data);
    this.props.onMonthChange && this.props.onMonthChange();

}
SelectList = (props) => {
    let popup = props.data.map((data) => {
        return (
            <div key={data}>
                <a href="#" onClick={(e)=> {this.onSelectChange(e, data)}}>
                    {data}
                </a>
            </div>
        );
    });

    return (
        <div className="month-popup">
            {popup}
        </div>
    );
}

onChangeMonth = (e, month) => {
    this.setState({
        showMonthPopup: !this.state.showMonthPopup
    });
}

MonthNav = () => {
    return (
        <span className="label-month"
            onClick={(e)=> {this.onChangeMonth(e, this.month())}}>
            {this.month()}
            {this.state.showMonthPopup &&
             <this.SelectList data={this.months} />
            }
        </span>
    );
}

showYearEditor = () => {
    this.setState({
        showYearNav: true
    });
}

setYear = (year) => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).set("year", year);
    this.setState({
        dateContext: dateContext
    })
}
onYearChange = (e) => {
    this.setYear(e.target.value);
    this.props.onYearChange && this.props.onYearChange(e, e.target.value);
}

onKeyUpYear = (e) => {
    if (e.which === 13 || e.which === 27) {
        this.setYear(e.target.value);
        this.setState({
            showYearNav: false
        })
    }
}

YearNav = () => {
    return (
        this.state.showYearNav ?
        <input
            defaultValue = {this.year()}
            className="editor-year"
            ref={(yearInput) => { this.yearInput = yearInput}}
            onKeyUp= {(e) => this.onKeyUpYear(e)}
            onChange = {(e) => this.onYearChange(e)}
            type="number"
            placeholder="year"/>
        :
        <span
            className="label-year"
            onDoubleClick={(e)=> { this.showYearEditor()}}>
            {this.year()}
        </span>
    );
}

onDayClick = (e, day) => {
    this.setState({
        selectedDay: day
    }, () => {
        console.log("SELECTED DAY: ", this.state.selectedDay + " " + this.state.dateContext.format("MMMM") + " " + this.state.dateContext.format("Y"));
        console.log("date", moment().calendar())
    });

    this.props.onDayClick && this.props.onDayClick(e, day);
}


GetAgenda = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/api/agenda')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch()
    }, []);
    const datum = this.state.selectedDay + " " + this.state.dateContext.format("MMMM") + " " + this.state.dateContext.format("Y")

    const filterdatum = posts.filter(dag=>{
        return (dag.dag===this.state.selectedDay + " " + this.state.dateContext.format("MMMM") + " " + this.state.dateContext.format("Y"))
    });


 

    return (
 <div className="tableAgenda"> 
 {"SELECTED DAY: ", this.state.selectedDay + " " + this.state.dateContext.format("MMMM") + " " + this.state.dateContext.format("Y")}             
 
                    <tbody>
                    <tr >
                        <th className="columnAgenda">Datum</th>
                        <th className="columnAgenda">Starttijd</th>
                        <th className="columnAgenda">Eindtijd</th>
                        <th className="columnAgenda">Beschrijving</th>
                    </tr>
                    </tbody>
  {filterdatum.map(function (post, id) {
            return (<Link className="linkk" to={{ pathname: "./Agenda_Bewerken", id: post.id, datum: post.dag, starttijd: post.starttijd, eindtijd: post.eindtijd, beschrijving: post.beschrijving}}>
                <tbody>
                <tr key={id} >
                     <td className="columnAgenda">
                        {post.dag}
                    </td>
                    <td className="columnAgenda">
                        {post.starttijd}
                    </td>
                    <td  className="columnAgenda">
                        {post.eindtijd}
                    </td>
                    <td className="columnAgenda">
                        {post.beschrijving}
                    </td>
                </tr>
                </tbody>
                </Link>
                    )
                })}
        </div>
    );
}

render() {
    // Map the weekdays i.e Sun, Mon, Tue etc as <td>
    let weekdays = this.weekdaysShort.map((day) => {
        return (
            <td key={day} className="week-day">{day}</td>
        )
    });

    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
        blanks.push(<td key={i * 80} className="emptySlot">
            {""}
            </td>
        );
    }

    console.log("blanks: ", blanks);


    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {

        let className = (d == this.currentDay() ? "day current-day": "day");
        let selectedClass = (d == this.state.selectedDay ? " selected-day " : "" )
        let actcolor = (this.state.activitydate== true ? "activityColor": "")
 
        daysInMonth.push(
            <td key={d} className={className + selectedClass} id={actcolor}>
              <span key={d + this.month + this.year} onClick={(e)=>{this.onDayClick(e, d)}} >{d}</span>
              
            </td>
        ); 
    }


    console.log("days: ", daysInMonth);

    var totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
        if ((i % 7) !== 0) {
            cells.push(row);
        } else {
            let insertRow = cells.slice();
            rows.push(insertRow);
            cells = [];
            cells.push(row);
        }
        if (i === totalSlots.length - 1) {
            let insertRow = cells.slice();
            rows.push(insertRow);
        }
    });

    let trElems = rows.map((d, i) => {
        return (
            <tr key={i*100}>
                {d}
            </tr>
        );
    })


    return (
      <div className="App">
        <h1 className='titleOefeningen'>Agenda</h1>
        <div className="agendaBody">
        <div className="calendar-container" style={this.style}>
            <table className="calendar">
                <thead>
                    <tr className="calendar-header">
                        <td colSpan="5">
                            <this.MonthNav />
                            {" "}
                            <this.YearNav />
                        </td>
                        <td colSpan="2" className="nav-month">
                            <i className="prev fa fa-fw fa-chevron-left"
                                onClick={(e)=> {this.prevMonth()}}>
                            </i>
                            <i className="prev fa fa-fw fa-chevron-right"
                                onClick={(e)=> {this.nextMonth()}}>
                            </i>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {weekdays}
                    </tr>
                    {trElems}
                </tbody>
            </table>
        </div>
        <this.GetAgenda />
        <Link to={{ pathname: "/Agenda_Toevoegen", dag: this.state.selectedDay + " " + this.state.dateContext.format("MMMM") + " " + this.state.dateContext.format("Y")}}><button className="addbutton2">+</button></Link>
        </div>
        
        <Check />
        </div>

    )
    }
  
}



export default Agenda;
//link: https://github.com/rajeshpillai/youtube-react-calendar