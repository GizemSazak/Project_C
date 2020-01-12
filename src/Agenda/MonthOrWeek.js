import React from "react";

export class MonthOrWeek extends React.Component {
  render() {
    return (
      <div id="monthOrWeek" style={{ visibility: this.props.visibility }}>
        <div id="wrapper2">
          <div
            id="selectWeek"
            onClick={() => {
              this.props.selectWeeks();
            }}
          >
            Week
          </div>
          <div
            id="selectMonth"
            onClick={() => {
              this.props.selectMonths();
            }}
          >
            Maand
          </div>
        </div>
      </div>
    );
  }
}
