import React, { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import "./calender.css";
import { leaveDetails } from '../../../utils/constants/data'



export const Dashboard = () => {

  const isWithinRange = (date) => {
    var found = false;
    leaveDetails.map((item) => {
      var { start_date, end_date } = item;
      if (start_date && end_date && date >= start_date && date <= end_date) {
        found = true;
        return;
      }
    })
    return found;
  };


  return (
    <div>
      <Calendar
        tileClassName={({ date, view }) => {
          const formattedDate = moment(date).format("YYYY-MM-DD");
          if (isWithinRange(formattedDate)) {
            return 'highlight'
          }
        }}
      />
    </div>
  );
};
