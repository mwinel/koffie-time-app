import React from "react";

const CreateDate = ({ created_on }) => {
  const currentYear = new Date();
  const d = new Date(created_on);
  const year = d.getFullYear(); // 2019
  const date = d.getDate(); // 23
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
  ];
  const monthIndex = d.getMonth();
  const monthName = months[monthIndex]; // Jan
  const formattedDate = `${monthName} ${date} ${year} `;
  const partiallyFormattedDate = `${monthName} ${date} `;
  if (year < currentYear.getFullYear()) {
    return <small>{formattedDate}</small>;
  }
  return <small>{partiallyFormattedDate}</small>;
};

export default CreateDate;
