import { useState } from 'react';

function Dice () {

const [random, setRandom] = useState(3);
const src = `../assets/images/dice${random}.png`;
console.log(src)

const getRandomNumber = () => {
  return Math.floor(Math.random() * 6) + 1; // 1 to 6
};

const handleDiceRoll = () => {
  const getRandom = getRandomNumber();
  setRandom('-empty');
  console.log(src);

  setTimeout(() => {
    setRandom(getRandom);
  }, 1000);
};

return (
  <>
    <h1>Dice</h1>
    <img className="dice" src={src} alt="Dice" onClick={handleDiceRoll} />
  </>
);    
}

export default Dice