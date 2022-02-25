import { useState } from 'react'

function LikeButton () {

    const [count, setCount] = useState(0)
    const backgroundColors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    const randomBackgroundColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];

    const handleIncrement =() => {
        setCount(count + 1)
    }

    const style = {
      backgroundColor: randomBackgroundColor,
    };    

    return (
      <div>
        <button style={style} onClick={handleIncrement}>
          {' '}
          {count} Likes
        </button>
      </div>
    );
}

export default LikeButton