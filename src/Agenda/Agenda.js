import './Agenda.css';
import Menu from '../Menu/Menu'
import React, { Component, useState, useEffect } from 'react';
import moment from "moment";
import { CalendarHead } from "./CalendarHead";
import { Events } from "./Events";
import event from "./event"
import { MonthOrWeek } from "./MonthOrWeek";
import { TableAgenda } from "./TableAgenda";
import 'react-day-picker/lib/style.css';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Table } from "react-bootstrap"
import "./styless.css";

var events = JSON.parse(localStorage.getItem("eventsObjects"))
console.log(events)
events == null ? events = [{ date: '', events: [{}] }] : JSON.parse(localStorage.getItem("eventsObjects"))


class Agenda extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: this.parseEvents(events),
      selectedDay: moment().format("DD/MM/YYYY"),
      currentDate: moment(),
      tableType: "months",
      visibility: "hidden",
      arrowDirection: "down"
    };
  }


  sortedEvents() {
    const eventsDatesList = this.getEventsDatesList();
    const eventDate = this.state.selectedDay;
    const isSameOrBeforeEvents = [];
    for (let d of eventsDatesList) {
      if (
        moment(eventDate, "DD/MM/YYYY").isSameOrBefore(
          moment(d, "DD/MM/YYYY"),
          "day"
        )
      ) {
        isSameOrBeforeEvents.push({ events: this.getDateEvents(d), day: d });
      }
    }

    return isSameOrBeforeEvents;
  }

  numberOfEventsInDays() {
    const numberOfEvents = events.map(e => [e.date, e.events.length]);
    return new Map(numberOfEvents);
  }

  getEventsDatesList() {
    const eventsDates = events.map(e => {
      return e.date;
    });
    return eventsDates;
  }

  parseEvents = events => {
    const parsedEvents = events.map(e => [e.date, e.events]);
    return new Map(parsedEvents);
  };

  showDateEvents = selectedDay => {
    this.setState({ selectedDay });
  };

  getDateEvents = date => {
    const { events } = this.state;
    return events.get(date);
  };

  changePanelVisibility = () => {
    if (this.state.visibility === "visible") {
      this.setState({ visibility: "hidden" });
      this.setState({ arrowDirection: "down" });
    } else {
      this.setState({ visibility: "visible" });
      this.setState({ arrowDirection: "up" });
    }
  };

  next = () => {
    if (this.state.tableType === "months")
      this.setState({ currentDate: this.state.currentDate.add(1, "month") });
    else this.setState({ currentDate: this.state.currentDate.add(7, "days") });
    this.setState({ selectedDay: "" });
  };

  prev = () => {
    if (this.state.tableType === "months")
      this.setState({
        currentDate: this.state.currentDate.subtract(1, "month")
      });
    else
      this.setState({
        currentDate: this.state.currentDate.subtract(7, "days")
      });
    this.setState({ selectedDay: "" });
  };

  selectMonths = () => {
    this.setState({ tableType: "months" });
    this.changePanelVisibility();
    this.setState({ selectedDay: "" });
  };
  selectWeeks = () => {
    this.setState({ tableType: "weeks" });
    this.changePanelVisibility();
    this.setState({ selectedDay: "" });
  };

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

    const filterdatum = posts.filter(dag => {
      return (dag.dag === this.state.selectedDay)
    });


    return (
      <Container className="p-0">
        <Col className="p-1" >
          <h4 className="mt-2">
            {"SELECTED DAY: ", this.state.selectedDay}
          </h4>

          <tr className="AgendaHeader1 p-2 mt-3">
            <th style={{ width: "33%" }}>Starttijd</th>
            <th style={{ width: "33%" }}>Eindtijd</th>
            <th style={{ width: "33%" }} >Beschrijving</th>
          </tr>

          {filterdatum.map(function (post, id) {
            return (localStorage.getItem('role') === 'trainer' &&
              <Link to={{ pathname: "./Agenda/Agenda_Bewerken", id: post.id, datum: post.dag, starttijd: post.starttijd, eindtijd: post.eindtijd, beschrijving: post.beschrijving }}>
                <tr key={id} className="AgendaBody1 p-1">
                  <td style={{ width: "33%" }}>{post.starttijd}</td>
                  <td style={{ width: "33%" }}>{post.eindtijd}</td>
                  <td style={{ width: "33%" }}>{post.beschrijving}</td>
                </tr>
              </Link>
            )
          })}
          {filterdatum.map(function (post, id) {
            return (localStorage.getItem('role') === 'speler' &&
              <tr key={id} className="AgendaBody1 p-1">
                <td style={{ width: "33%" }}>{post.starttijd}</td>
                <td style={{ width: "33%" }}>{post.eindtijd}</td>
                <td style={{ width: "33%" }}>{post.beschrijving}</td>
              </tr>)
          })}
        </Col>
      </Container>
    );
  }

  render() {

    if (!localStorage.getItem('Data') || localStorage === null) {
      window.location.href = '/';
    }
    else {
      const selectedDayEvents = this.sortedEvents();
      const eventsDatesList = this.getEventsDatesList();
      return (
        <Container className="Background m-0">
          <Row >
            {/* Menu */}
            <Col xs={3} sm={1} lg={1} className="p-0"><Menu /></Col>

            <Col xs={9} sm={11} lg={11} className="d-flex flex-column justify-content-end text-white text-center">
              {/* Page Header */}
              <Row>
                <Col className="py-5"><h4>Agenda</h4></Col>
              </Row>
              {/* Page Body */}
              <Row className="Body pt-4">
                <Col>
                  <Row style={{ height: '90%' }}>
                    <this.GetAgenda />
                  </Row>
                  <Row className="d-flex justify-content-center align-items-center" style={{ height: '10%' }}>
                    <Col>{localStorage.getItem('role') === 'trainer' &&
                      <Link to={{ pathname: "./Agenda/Agenda_Toevoegen", dag: this.state.selectedDay }}>
                        <Button className="btn-success">Toevoegen</Button>
                      </Link>}
                    </Col>
                  </Row>
                </Col>

                <Col >
                  <Table className="d-flex justify-content-start pt-5">
                    <div id="wrapper">
                      <CalendarHead
                        tableType={this.state.tableType}
                        currentDate={this.state.currentDate}
                        changePanelVisibility={this.changePanelVisibility}
                        arrowDirection={this.state.arrowDirection}
                        next={this.next}
                        prev={this.prev}
                      />
                      <MonthOrWeek
                        selectMonths={this.selectMonths}
                        selectWeeks={this.selectWeeks}
                        visibility={this.state.visibility}
                      />
                      <TableAgenda
                        eventsDatesList={eventsDatesList}
                        currentDate={this.state.currentDate}
                        tableType={this.state.tableType}
                        showDateEvents={this.showDateEvents}
                        selectedDay={this.state.selectedDay}
                        numberOfEventsInDays={this.numberOfEventsInDays}
                      />
                    </div>
                  </Table>


                  {/* <table className="calendar">
                                        <thead>
                                            <tr className="calendar-header">
                                                <td colSpan="5">
                                                    <this.MonthNav />
                                                    {" "}
                                                    <this.YearNav />
                                                </td>
                                                <td colSpan="2" className="nav-month">
                                                    <i className="prev fa fa-fw fa-chevron-left"
                                                        onClick={(e) => { this.prevMonth() }}>
                                                    </i>
                                                    <i className="prev fa fa-fw fa-chevron-right"
                                                        onClick={(e) => { this.nextMonth() }}>
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
                                    </table> */}

                </Col>
              </Row>
            </Col>
          </Row>
        </Container >
      )
    }
  }
}

export default Agenda;