import React from "react";

export class Day extends React.Component {
  render() {
    const {
      day,
      onClick,
      id,
      isToday,
      isValidDay,
      selectedDay,
      numberOfEventsInDays
    } = this.props;
    let isDayHaveEvent = false;
    const className = day && "hasCellValue";
    const listOfNumberOfEvent = numberOfEventsInDays();
    let numOfEvents = 0;
    for (let value of this.props.eventsDatesList) {
      if (value === this.props.dateFormat) {
        isDayHaveEvent = true;
        numOfEvents = listOfNumberOfEvent.get(value);
        break;
      }
    }

    const selectedDayStyle = {};
    if (selectedDay === this.props.dateFormat) {
      selectedDayStyle.background = "#0b3157";
      selectedDayStyle.color = "#ffffff";
      selectedDayStyle.borderRadius = "5pt";
    }

    const eventLines = [];

    for (let i = 0; i < numOfEvents; i++) {
      eventLines.push(<div className="eventLine" />);
    }

    return (
      <td
        id={id}
        onClick={onClick}
        className={className}
        style={selectedDayStyle}
      >
        {isValidDay && (
          <>
            {isToday && <div className="dot" />}
            {isDayHaveEvent && <div className="dayHasEvent">{eventLines}</div>}
            <div className="cellValue">{day}</div>
          </>
        )}
      </td>
    );
  }
}
