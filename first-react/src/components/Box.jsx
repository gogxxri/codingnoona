import React from 'react';

const Box = ({ title, item, result }) => {
  let comResult;
  if (result === 'tie') {
    comResult = 'tie';
  } else if (result === 'win') {
    comResult = 'lose';
  } else if (result === 'lose') {
    comResult = 'win';
  }
  return (
    <div className={`box ${title === 'You' ? result : comResult}`}>
      <h1>{title}</h1>
      {item ? <img src={item && item.img} alt="rock" /> : <p>버튼을 눌러보세요</p>}
      {title === 'You' ? <p>{result}</p> : <p>{comResult}</p>}
    </div>
  );
};

export default Box;
