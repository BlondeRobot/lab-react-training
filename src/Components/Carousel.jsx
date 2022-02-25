import { useState } from 'react';

function Carousel ({images}) {


    const [index, setIndex] = useState(0);

    let displayedImage = images[index];

    const handleRightClick = () => {
      index !== images.length - 1
        ? setIndex(index + 1)
        : setIndex(0);

    };

    const handleLeftClick = () => {
      index !== 0
        ? setIndex(index - 1)
        : setIndex(images.length - 1);
    };

    return (
      <>
        <h1>Carousel</h1>
        <button onClick={handleLeftClick} className="left">
          Left
        </button>
        <img src={displayedImage} alt="" />
        <button onClick={handleRightClick} className="right">
          Right
        </button>
      </>
    );

}

export default Carousel