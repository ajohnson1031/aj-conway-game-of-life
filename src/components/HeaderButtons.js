import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedoAlt, faForward } from "@fortawesome/free-solid-svg-icons";

const HeaderButtons = ({
  startGame,
  stopGame,
  reset,
  universe,
  skipGeneration,
  skipTenGenerations,
}) => {
  return (
    <div className='header-buttons'>
      <button className='start-button' onClick={startGame}>
        Start Sim
      </button>
      <button className='stop-button' onClick={stopGame}>
        Stop
      </button>
      <button className='reset-button' onClick={reset}>
        <FontAwesomeIcon icon={faRedoAlt} />
      </button>
      <p>
        Current Gen: <span className='gen'>{universe.getGeneration()}</span>
      </p>
      <button className='skip-button' onClick={skipGeneration}>
        Skip 1 Gen <FontAwesomeIcon icon={faForward}></FontAwesomeIcon>
      </button>
      <button className='skip-ten-button' onClick={skipTenGenerations}>
        Skip 10 Gens <FontAwesomeIcon icon={faForward}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default HeaderButtons;
