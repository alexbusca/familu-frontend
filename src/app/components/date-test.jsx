import React from 'react';

function DateDay() {
  const date = new Date().getDate();
  const month = new Date().getMonth();


  return (
    <div>
      <p>Questa è la data: {date.toString()}, {month.toString()}</p>
    </div>
  );
}
export default DateDay;
