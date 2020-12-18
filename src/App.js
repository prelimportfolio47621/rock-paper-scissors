import React, { useState, useEffect } from 'react';
import Scoreboard from './components/Scoreboard';
import ChoicesBar from './components/ChoicesBar';
import Result from './components/Result';
import './App.css';

function App() {
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [result, setResult] = useState('Ready. Set. Go!');

  const getComputerChoice = () => {
    const choices = ['r', 'p', 's'];
    const index = Math.floor(Math.random() * 3);
    return choices[index];
  }

  const win = (userChoice, compChoice) => {
    setUserScore(userScore => userScore + 1);
    setResult('You win!');
  }

  const lose = (userChoice, compChoice) => {
    setCompScore(compScore => compScore + 1);
    setResult('You lose!');
  }

  const draw = (userChoice, compChoice) => {
    setResult("It's a draw!");
  }

  const game = (userChoice) => {
    const compChoice = getComputerChoice();
    switch(userChoice + compChoice) {
      case 'rs':
      case 'sp':
      case 'pr':
        win(userChoice, compChoice);
        break;
      case 'sr':
      case 'ps':
      case 'rp':
        lose(userChoice, compChoice);
        break;
      case 'rr':
      case 'pp':
      case 'ss':
        draw(userChoice, compChoice);
        break;
    }
  }

  const playGame = (choice) => {
    game(choice);
  }

  return (
    <div className="App">
      <Scoreboard userSc={userScore} compSc={compScore} />
      <Result text={result} />
      <ChoicesBar clickChoice={playGame} />
      <p id="action-message">Make your move.</p>
    </div>
  );
}

export default App;
