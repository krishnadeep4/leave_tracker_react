import React, { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import "./calender.css";

export const Dashboard = () => {
  var dateToFormat = "2018-05-16 12:57:13"; //TIMESTAMP
  var dateToFormat2 = "2018-05-7 12:57:13"; //TIMESTAMP

  const leavedate = moment(dateToFormat).format("DD/MM/YYYY");
  const leavedate2 = moment(dateToFormat2).format("DD/MM/YYYY");
  const [value, onChange] = useState(new Date());
  console.log(value);
  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        showWeekNumbers={true}
        tileContent={"rahul leave"}
      />
    </div>
  );
};
