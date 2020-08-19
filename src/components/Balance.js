import React from "react";

import Reel from "react-reel";

const Balance = ({ amounts, reelTheme }) => {
  const total = amounts.reduce((acc, item) => (acc += item), 0);
  const reelString = (total < 0 ? "-" : "") + "$" + Math.abs(total);

  const reelStyle = JSON.parse(JSON.stringify(reelTheme)); // copy object but not reference

  reelStyle.reel.justifyContent = "start";

  return (
    <>
      <h4>Your Balance</h4>
      <div style={{ backgroundColor: total >= 0 ? "#2ecc7157" : "#ff18004a" }}>
        <h1>
          <Reel theme={reelStyle} text={reelString} />
        </h1>
      </div>
    </>
  );
};

export default Balance;
