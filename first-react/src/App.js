import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [youState, setYouState] = useState(0);
  const [computerState, setComputerState] = useState(0);
  const [youWin, setYouWin] = useState('비김');
  const [computerWin, setComputerWin] = useState('비김');

  const clickHandler = you => {
    setYouState(you);
    setComputerState(parseInt(Math.random() * 3));
  };

  useEffect(() => {
    switch (true) {
      case youState === computerState:
        setYouWin('SAME!');
        setComputerWin('SAME!');
        break;
      case youState === 0 && computerState === 1:
      case youState === 1 && computerState === 2:
      case youState === 2 && computerState === 0:
        setYouWin('WIN!');
        setComputerWin('LOSE');
        break;
      default:
        setYouWin('LOSE');
        setComputerWin('WIN!');
    }
  }, [youState, computerState]);

  return (
    <div className="container">
      <div className="title">가위 바위 보!</div>
      <div className="boxWrap">
        <div className="box">
          <div>
            <p className="who">you</p>
            <div className="handBox">
              <div>{youState === 0 ? '👊' : youState === 1 ? '✌' : '✋'}</div>
            </div>
            <div className="winBox">
              <p className={youWin === 'WIN!' ? 'win' : youWin === 'LOSE' ? 'lose' : 'same'}>{youWin}</p>
            </div>
          </div>
        </div>
        <div className="box">
          <p className="who">computer</p>
          <div className="handBox">
            <div>{computerState === 0 ? '👊' : computerState === 1 ? '✌' : '✋'}</div>
          </div>
          <div className="winBox">
            <p className={computerWin === 'WIN!' ? 'win' : computerWin === 'LOSE' ? 'lose' : 'same'}>{computerWin}</p>
          </div>
        </div>
      </div>
      <div className="selectBox">
        <div onClick={() => clickHandler(0)}>👊</div>
        <div onClick={() => clickHandler(1)}>✌</div>
        <div onClick={() => clickHandler(2)}>✋</div>
      </div>
    </div>
  );
}

export default App;
