import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState.js";

const AddTransaction = () => {
  const globalContext = useContext(GlobalContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <>
      <h3>Add new transaction</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setText("");
          setAmount(0);
          const action = {
            type: globalContext.ACTIONS.ADD,
            info: {
              text: text,
              amount: amount,
            },
          };
          globalContext.dispatch(action);
        }}
      >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            required
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
