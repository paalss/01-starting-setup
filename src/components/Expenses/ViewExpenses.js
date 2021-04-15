import React from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./ViewExpenses.css";

const ViewExpenses = (props) => {
  const filterChangeHandler = (chosenYear) => {
    props.onApplyFilterHandler(chosenYear)
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={props.year.chosenYear}
          onFilterChange={filterChangeHandler}
        />
        {props.data.map((element) => {
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
