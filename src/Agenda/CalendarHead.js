import React from "react";
import moment from "moment";
export class CalendarHead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "",
      prev: "",
      next: "",
      currentDate: this.props.currentDate
    };
  }

  createCalendHead() {
    const monthsName = [
      "Januari",
      "Februari",
      "Maart",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Augustus",
      "September",
      "Oktober",
      "November",
      "December"
    ];
    const currentDate = moment(this.state.currentDate);
    const currentMonth = currentDate.month();
    const prevMonth = moment(currentDate).subtract(1, "month");
    const nextMonth = moment(currentDate).add(1, "month");

    if (this.props.tableType === "months") {
      this.setState({
        current: monthsName[currentMonth] + " " + currentDate.year(),
        prev: monthsName[prevMonth.month()],
        next: monthsName[nextMonth.month()]
      });
    } else {
      const beginOfWeek = moment(currentDate.startOf("week"));
      const endOfWeek = moment(currentDate.endOf("week"));

      const monthsRange = [monthsName[currentMonth]];
      if (beginOfWeek.month() !== endOfWeek.month())
        monthsRange.push(monthsName[endOfWeek.month()]);

      const current =
        monthsRange.join("-") +
        "(" +
        beginOfWeek.date() +
        "-" +
        endOfWeek.date() +
        ") " +
        endOfWeek.year();
      this.setState({
        current: current,
        prev: "Vorige",
        next: "Volgende"
      });
    }
  }

  componentDidMount() {
    this.createCalendHead();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.tableType !== this.props.tableType) {
      this.createCalendHead();
    }
  }

  render() {
    return (
      <div id="calendarHead">
        <div
          id="prev"
          onClick={() => {
            this.props.prev();
            this.createCalendHead();
          }}
        >
          {this.state.prev}
        </div>
        <div
          id="current"
          onClick={() => {
            this.props.changePanelVisibility();
          }}
        >
          {this.state.current}
        </div>
        <div
          id="next"
          onClick={() => {
            this.props.next();
            this.createCalendHead();
          }}
        >
          {this.state.next}
        </div>
      </div>
    );
  }
}
