import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./ViewExpenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

const ViewExpenses = (props) => {
  const [chosenYear, setChosenYear] = useState("2020");
  const filterChangeHandler = (chosenYear) => {
    setChosenYear(chosenYear);
  };

  const filteredExpenses = props.data.filter((element) => {
    return element.date.getFullYear() === parseInt(chosenYear);
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={chosenYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList data={filteredExpenses} />
      </Card>
    </div>
  );
};

export default ViewExpenses;
