import React, { useContext } from "react";

import { motion } from "framer-motion";

import { GlobalContext } from "../context/GlobalState.js";

const item = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  disappear: { opacity: 0, x: -100, duration: 1 },
};

const Transaction = ({ transaction }) => {
  const globalContext = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <motion.li
      className={transaction.amount < 0 ? "minus" : "plus"}
      variants={item}
      initial="hidden"
      animate="visible"
      exit="disappear"
    >
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => {
          const action = {
            type: globalContext.ACTIONS.DELETE,
            info: {
              id: transaction.id,
            },
          };

          globalContext.dispatch(action);
        }}
      >
        X
      </button>
    </motion.li>
  );
};

export default Transaction;
