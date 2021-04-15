import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./ViewExpenses.css";

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
        {filteredExpenses.map((element) => {
          return (
            <ExpenseItem
              key={element.id}
              title={element.title}
              amount={element.amount}
              date={element.date}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default ViewExpenses;
