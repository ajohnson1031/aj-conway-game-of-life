import React from "react";

const BoardContainer = ({ renderBoard }) => {
  return <div className='board-container'>{renderBoard()}</div>;
};

export default BoardContainer;
