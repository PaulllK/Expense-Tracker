import React, { useContext } from "react";

import "./App.css";

import Header from "./components/Header.js";
import Balance from "./components/Balance.js";
import IncomeExpenses from "./components/IncomeExpenses.js";
import TransactionList from "./components/TransactionList.js";
import AddTransaction from "./components/AddTransaction";

import { GlobalContext } from "./context/GlobalState.js";

const reelStyle = {
  reel: {
    height: "1.07em",
    display: "flex",
    alignItems: "flex-end",
    overflowY: "hidden",
    lineHeight: "0.97em",
    justifyContent: "center",
  },

  group: {
    transitionDelay: "0ms",
    transitionTimingFunction: "ease-in-out",
    transform: "translate(0, 0)",
    height: "1em",
  },

  number: {
    height: "1em",
    fontFamily: "Fira-Sans",
  },
};

function App() {
  const transactions = useContext(GlobalContext).transactions;

  const amounts = transactions.map((transaction) => transaction.amount);

  return (
    <>
      <Header />
      <div className="container">
        <Balance amounts={amounts} reelTheme={reelStyle} />
        <IncomeExpenses amounts={amounts} reelTheme={reelStyle} />
        {transactions.length ? <TransactionList /> : null}
        <AddTransaction />
      </div>
    </>
  );
}

export default App;
