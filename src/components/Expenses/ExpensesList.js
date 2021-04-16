import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.data.length === 0) {
    return <p className="expenses-list__fallback"> No expenses found</p>;
  }

  return (
    <ul className="expenses-list">
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
    </ul>
  );
};

export default ExpensesList;
