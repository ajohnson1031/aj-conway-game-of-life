import React, { useState } from "react";

const HeaderInputs = ({
  handleRowChange,
  handleColumnChange,
  changeSpeed,
  size,
  speed,

  renderBoard,
}) => {
  const [input, setInput] = useState({
    rowsInput: size[1],
    colsInput: size[0],
    newSpeed: speed,
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.currentTarget.name]: e.currentTarget.value });
  };

  return (
    <div className='header-inputs'>
      <label htmlFor='rowsInput'>Rows:</label>
      <input
        type='text'
        className='grid-input'
        name='rowsInput'
        value={input.rowsInput}
        onChange={handleChange}
      />
      <label htmlFor='colsInput'>Cols:</label>
      <input
        type='text'
        className='grid-input'
        name='colsInput'
        value={input.colsInput}
        onChange={handleChange}
      />
      <button
        className='resize-button'
        onClick={() => {
          handleRowChange([input.colsInput, input.rowsInput]);
          handleColumnChange([input.colsInput, input.rowsInput]);
          renderBoard();
        }}
      >
        Resize Grid
      </button>
      <label htmlFor='speed'>Speed:</label>
      <input
        type='text'
        className='grid-input speed'
        name='newSpeed'
        value={input.newSpeed}
        onChange={handleChange}
      />
      <p>ms</p>
      <button
        className='speed-button'
        onClick={() => {
          changeSpeed(input.newSpeed, "green");
        }}
      >
        Change Speed
      </button>
    </div>
  );
};

export default HeaderInputs;
