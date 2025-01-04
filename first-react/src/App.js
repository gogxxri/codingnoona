import React, { useState } from 'react';
import './App.css';
import Box from './components/Box';
import rockImg from './assets/imgs/rock.png';
import scissorsImg from './assets/imgs/scissors.png';
import paperImg from './assets/imgs/paper.png';

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState('');

  const choice = {
    rock: {
      name: 'rock',
      img: rockImg,
    },
    scissors: {
      name: 'scissors',
      img: scissorsImg,
    },
    paper: {
      name: 'paper',
      img: paperImg,
    },
  };
  const play = userChoice => {
    const userSelection = choice[userChoice];
    setUserSelect(userSelection);

    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    setResult(judgment(userSelection, computerChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체의 키값만 뽑아서 array로 바꿈
    let randomItem = parseInt(Math.random() * 3);
    let final = itemArray[randomItem];
    return choice[final];
  };

  const judgment = (user, computer) => {
    if (!user || !computer) {
      return '버튼을 눌러보세요!';
    }
    switch (true) {
      case user.name === computer.name:
        return 'tie';
      case user.name === 'rock' && computer.name === 'scissors':
      case user.name === 'paper' && computer.name === 'rock':
      case user.name === 'scissors' && computer.name === 'paper':
        return 'win';
      default:
        return 'lose';
    }
  };

  return (
    <div className="container">
      <div className="boxWrap">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="btnWrap">
        <button onClick={() => play('rock')}>👊</button>
        <button onClick={() => play('scissors')}>✌</button>
        <button onClick={() => play('paper')}>✋</button>
      </div>
    </div>
  );
}

export default App;
