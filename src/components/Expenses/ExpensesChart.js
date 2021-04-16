import React from "react";

import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "jan", value: 0 },
    { label: "feb", value: 0 },
    { label: "mars", value: 0 },
    { label: "apr", value: 0 },
    { label: "mai", value: 0 },
    { label: "jun", value: 0 },
    { label: "juli", value: 0 },
    { label: "aug", value: 0 },
    { label: "okt", value: 0 },
    { label: "nov", value: 0 },
    { label: "des", value: 0 },
  ];

for (const expense of props.expenses) {
  const expenseMonth = expense.date.getMonth()
  chartDataPoints[expenseMonth].value += expense.amount
}

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
