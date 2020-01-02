import React from "react";
import moment from "moment";
import { Day } from "./Day";

export class TableAgenda extends React.Component {
  showDateEvents = date => () => {
    this.props.showDateEvents(date);
  };

  isToday = date => {
    return date.format("YYYY-MM-DD") === moment().format("YYYY-MM-DD");
  };

  getDayId = date => {
    return this.isToday(date) ? "currentDay" : "";
  };

  render() {
    const { currentDate } = this.props;
    const beginningOfMonth = moment(currentDate);
    const trWithTh = [
      <th>
        <div className="thCell">Zo</div>
      </th>,
      <th>
        <div className="thCell">Ma</div>
      </th>,
      <th>
        <div className="thCell">Di</div>
      </th>,
      <th>
        <div className="thCell">Wo</div>
      </th>,
      <th>
        <div className="thCell">Do</div>
      </th>,
      <th>
        <div className="thCell">Vr</div>
      </th>,
      <th>
        <div className="thCell">Za</div>
      </th>
    ];
    const table = [];
    table.push(<tr>{trWithTh}</tr>);
    table.push(<tr id="indent" />);
    if (this.props.tableType === "months") {
      beginningOfMonth.set("date", 1);
      const monthDate = moment(beginningOfMonth);
      monthDate.subtract(beginningOfMonth.weekday(), "days");
      const ROWS = 6;
      const COLS = 7;
      for (let i = 0; i < ROWS; i++) {
        let tr = [];
        for (let j = 0; j < COLS; j++) {
          const isValidDay = beginningOfMonth.month() === monthDate.month();
          const currentDay = isValidDay && monthDate.date();
          const monthDateFormat = monthDate.format("DD/MM/YYYY");
          const id = this.getDayId(monthDate);
          const onClick = isValidDay
            ? this.showDateEvents(monthDateFormat)
            : null;

          tr.push(
            <Day
              dateFormat={monthDateFormat}
              eventsDatesList={this.props.eventsDatesList}
              day={currentDay}
              id={id}
              onClick={onClick}
              isToday={this.isToday(monthDate)}
              isValidDay={isValidDay}
              selectedDay={this.props.selectedDay}
              numberOfEventsInDays={this.props.numberOfEventsInDays}
            />
          );
          monthDate.add(1, "day");
        }
        table.push(<tr>{tr}</tr>);
      }
    } else {
      const weekDate = moment(this.props.currentDate.startOf("week"));
      const tr = [];
      for (let i = 0; i < 7; i++) {
        const id = this.getDayId(weekDate);
        const weekDateFormat = weekDate.format("DD/MM/YYYY");

        tr.push(
          <Day
            eventsDatesList={this.props.eventsDatesList}
            dateFormat={weekDateFormat}
            day={weekDate.date()}
            id={id}
            onClick={this.showDateEvents(weekDateFormat)}
            isToday={this.isToday(weekDate)}
            isValidDay={true}
            selectedDay={this.props.selectedDay}
            numberOfEventsInDays={this.props.numberOfEventsInDays}
          />
        );
        weekDate.add(1, "day");
      }
      table.push(<tr>{tr}</tr>);
    }
    return (
      <>
        <table>{table}</table>
      </>
    );
  }
}
