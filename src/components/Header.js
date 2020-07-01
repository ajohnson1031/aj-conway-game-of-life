import React from "react";
import HeaderInputs from "./HeaderInputs";
import HeaderButtons from "./HeaderButtons";
import Message from "../components/Message";

const Header = ({
  handleRowChange,
  handleColumnChange,
  startGame,
  stopGame,
  universe,
  reset,
  changeSpeed,
  size,
  speed,
  message,
  color,
  skipGeneration,
  skipTenGenerations,
  renderBoard,
}) => {
  return (
    <div className='header-container'>
      <div className='inner'>
        <h1>"Conway's Game of Life, by Aaron Johnson"</h1>
        <div className='controls'>
          <HeaderInputs
            handleRowChange={handleRowChange}
            handleColumnChange={handleColumnChange}
            changeSpeed={changeSpeed}
            size={size}
            speed={speed}
            renderBoard={renderBoard}
          />
          <HeaderButtons
            startGame={startGame}
            stopGame={stopGame}
            reset={reset}
            universe={universe}
            skipGeneration={skipGeneration}
            skipTenGenerations={skipTenGenerations}
          />
          {message && <Message message={message} color={color} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
