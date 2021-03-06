import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import Card from "../UI/Card";
import "./ExpensesItemMain.css";
function ExpenseItemMain(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onChangeFilter={filterChangeHandler} />
        {filteredExpenses.length === 0 ? (
          <p>No expenses found</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            ></ExpenseItem>
          ))
        )}
      </Card>
    </div>
  );
}

export default ExpenseItemMain;
