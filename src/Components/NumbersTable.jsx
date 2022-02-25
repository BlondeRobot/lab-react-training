

function NumbersTable ({limit}) {
    const numbersArray = Array.from(Array(limit)).map((item, index) => index + 1);
    return (
      <div>
        <h2>NumbersTable</h2>
        <ul className="number-container">
          {numbersArray.map((item) => {
            return (
              <li
                key={item}
                style={{ backgroundColor: item % 2 === 0 ? 'red' : 'white' }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
}

export default NumbersTable