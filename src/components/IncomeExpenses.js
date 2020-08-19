import React from "react";

import Reel from "react-reel";

const IncomeExpenses = ({ amounts, reelTheme }) => {
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);

  const incomeString = `+$${income}`;

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => acc + item, 0) * -1
  ).toFixed(2);

  const expenseString = `-$${expense}`;

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">
          <Reel theme={reelTheme} text={incomeString} />
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">
          <Reel theme={reelTheme} text={expenseString} />
        </p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
