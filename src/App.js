import React, { Component } from "react";
import MainWrapper from "./components/MainWrapper";
import Header from "./components/Header";
import BoardContainer from "./components/BoardContainer";
import Cell from "./components/Cell";
import initialState from "./store";
import Universe from "./logic/Universe";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      universe: new Universe(),
      size: initialState.size,
      isRunning: initialState.isRunning,
      speed: initialState.speed,
      message: initialState.message,
      color: initialState.color,
    };
    this.handleColumnChange = this.handleColumnChange.bind(this);
    this.handleRowChange = this.handleRowChange.bind(this);
    this.startGame = this.startGame.bind(this);
    this.stopGame = this.stopGame.bind(this);
    this.renderBoard = this.renderBoard.bind(this);
    this.storeCell = this.storeCell.bind(this);
    this.reset = this.reset.bind(this);
    this.changeSpeed = this.changeSpeed.bind(this);
    this.skipGeneration = this.skipGeneration.bind(this);
    this.skipTenGenerations = this.skipTenGenerations.bind(this);
  }

  handleRowChange(size) {
    if (!this.state.isRunning) {
      let actualSize = this.state.size;
      actualSize[1] = size[1];

      this.setState({ size: actualSize });
    }
  }

  handleColumnChange(size) {
    if (!this.state.isRunning) {
      let actualSize = this.state.size;
      actualSize[0] = size[0];

      this.setState({
        size: actualSize,
        message: `Grid now has ${actualSize[1]} rows and ${actualSize[0]} columns`,
        color: "green",
      });
    }
  }

  startGame() {
    if (!this.state.isRunning) {
      this.setState({ isRunning: true, message: null }, () => {
        this.intervalRef = setInterval(() => this.runGame(), this.state.speed);
      });
    }
  }

  stopGame() {
    this.setState(
      {
        isRunning: false,
        message: `Your sim ran a total of ${this.state.universe.getGeneration()} times.`,
        color: "green",
      },
      () => {
        clearInterval(this.intervalRef);
      }
    );
  }

  changeSpeed(newSpeed, newColor) {
    if (!this.state.running) {
      this.setState({
        speed: Number(newSpeed),
        message: `Speed is now ${
          Number(newSpeed) < 1000 ? Number(newSpeed) : Number(newSpeed) / 1000
        }${Number(newSpeed) < 1000 ? "ms" : "s"}`,
        color: newColor,
      });
    }
  }

  storeCell(position) {
    if (!this.state.isRunning)
      this.setState({ universe: this.state.universe.storeCell(position) });
    else
      this.setState({
        message: "Please stop auto-sim in order to change grid structure.",
        color: "red",
      });
  }

  runGame() {
    let currentCells = this.state.universe.getLiveCells();
    if (currentCells.size <= 0) {
      this.stopGame();
      this.setState({
        message: `Your sim ran a total of ${this.state.universe.getGeneration()} times.`,
        color: "green",
      });
    }
    this.setState({ universe: this.state.universe.addGeneration() });
  }

  skipGeneration() {
    if (!this.state.running) {
      this.setState({ universe: this.state.universe.addGeneration() });
      this.renderBoard();
    } else {
      this.setState({
        message: "Please stop auto-sim in order to step through it manually.",
        color: "red",
      });
    }
  }

  skipTenGenerations() {
    if (!this.state.running) {
      let g = 0;
      while (g < 9) {
        this.state.universe.addGeneration();
        g++;
      }
      this.setState({ universe: this.state.universe.addGeneration() });
      this.renderBoard();
    } else {
      this.setState({
        message: "Please stop auto-sim in order to step through it manually.",
        color: "red",
      });
    }
  }

  renderBoard() {
    let newGrid = [];
    let cellRow = [];

    for (let i = 0; i < this.state.size[0]; i++) {
      for (let j = 0; j < this.state.size[1]; j++) {
        if (this.state.universe.isCellAlive(i + " , " + j)) {
          cellRow.push(
            <Cell
              key={[i, j]}
              position={{ x: i, y: j }}
              live={true}
              storeCell={this.storeCell.bind(this)}
            />
          );
        } else {
          cellRow.push(
            <Cell
              key={[i, j]}
              position={{ x: i, y: j }}
              live={false}
              storeCell={this.storeCell.bind(this)}
            />
          );
        }
      }

      newGrid.push(
        <div className='row' key={i}>
          {cellRow}
        </div>
      );
      cellRow = [];
    }

    return newGrid;
  }

  reset() {
    if (this.state.isRunning) this.stopGame();
    this.setState({
      universe: new Universe(),
      size: initialState.size,
      isRunning: initialState.isRunning,
      message: null,
      speed: initialState.speed,
    });
  }

  render() {
    return (
      <div className='App'>
        <MainWrapper
          items={[
            <Header
              key={Math.random()}
              size={this.state.size}
              handleRowChange={this.handleRowChange}
              handleColumnChange={this.handleColumnChange}
              startGame={this.startGame}
              stopGame={this.stopGame}
              changeSpeed={this.changeSpeed}
              universe={this.state.universe}
              renderBoard={this.renderBoard}
              reset={this.reset}
              speed={this.state.speed}
              color={this.state.color}
              skipGeneration={this.skipGeneration}
              skipTenGenerations={this.skipTenGenerations}
              message={this.state.message}
            />,
            <BoardContainer
              key={Math.random()}
              renderBoard={this.renderBoard}
            />,
          ]}
        ></MainWrapper>
      </div>
    );
  }
}
