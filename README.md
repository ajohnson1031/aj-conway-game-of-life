# Conway's Game of Life - AJ Edition

Conway's game of life is a well-known algorithm that makes use of an easy-to-follow deterministic pattern moving cells on a grid through the life/death cycle via a preconfigured set of parameters. My visualization allows an end-user to view an animation of this pattern by selecting their own patterns on the grid, or by generating a randomized start pattern.

<br>

## Motivation

The idea is mainly to display an algorithmic process in action in an optimized way. This project is a test of skill for a developer, and I am passionate about improving my skillset through learning.

<br>

## Build Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/d232bc37-bf54-4b3f-b343-9247400b2534/deploy-status)](https://app.netlify.com/sites/aj-conway-game-of-life-2020/deploys)

<br>

## Code Style

<img src="https://img.shields.io/badge/react%20component%20style-class-blue" alt="react component style">

<br>

## Screenshots

<img src="https://raw.githubusercontent.com/ajohnson1031/aj-conway-game-of-life/master/src/imgs/screenshot.png" alt="Game of Life Screenshot">

<br>

## Tech/Framework Used

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). LESS (CSS) styling.

## Features

Apart from the visualization, several additional features were added to make this project more user-friendly.

- Users are able to change the size of the grid by altering row/column count
- Users may also change speed of simulation (sim must be stopped)
- Users may skip generations to speed up the end result display (sim must be stopped)
- Users may randomize the grid seed with the press of a button

A very easily understandable UI interface allows for use of all functionality within the app.

<br>

## Installation

Installing is easy. Simply fork and clone the project to your Mac/PC, run `yarn` to install dependencies and initialize the project with `yarn start`.

<br>

## Contribute

One additional feature which may be added is a dropdown of Conway figures (glider, spaceship, etc.) with which the grid may initially be seeded.
