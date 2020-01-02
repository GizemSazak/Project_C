import React from "react";
import moment from "moment";

export class Events extends React.Component {
  render() {
    const eventsDate = moment(this.props.dayEvents.day, "DD/MM/YYYY").format(
      "dddd, D MMMM"
    );
    return (
      <>
        <div className="eventDate">{eventsDate}</div>
        {this.props.dayEvents.events.map(dayEvent => (
          <div className="event">
            <div className="eventWrapper">
              <div>{dayEvent.name}</div>
              <div>{dayEvent.time}</div>
            </div>
            <div className="eventBody">{dayEvent.body}</div>
          </div>
        ))}
      </>
    );
  }
}
