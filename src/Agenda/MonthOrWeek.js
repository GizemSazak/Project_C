//Панель выбора вида отображения(месячное, понедельное).
//Раскрывается при клике на текущий месяц(неделю)

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
            This week
          </div>
          <div
            id="selectMonth"
            onClick={() => {
              this.props.selectMonths();
            }}
          >
            This month
          </div>
        </div>
      </div>
    );
  }
}
