import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState.js";

import Transaction from "./Transaction.js";
import { motion, AnimatePresence } from "framer-motion";

const head = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  disappear: { scale: 0, y: 100 },
};

const TransactionList = () => {
  const transactions = useContext(GlobalContext).transactions;

  return (
    <>
      <motion.h3 variants={head} initial="hidden" animate="visible">
        Transactions
      </motion.h3>
      <ul className="list">
        <AnimatePresence>
          {transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </AnimatePresence>
      </ul>
    </>
  );
};

export default TransactionList;
