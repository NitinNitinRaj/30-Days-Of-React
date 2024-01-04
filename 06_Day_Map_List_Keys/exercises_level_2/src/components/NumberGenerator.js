export default function NumberGenerator({ max }) {
  const numbers = [];
  for (let i = 0; i <= max; i++) {
    let col;
    if (i === 0) col = "green-block";
    else {
      if (i % 2 === 0) col = "green-block";
      if (i % 2 !== 0) col = "yellow-block";
      if (i !== 1) {
        let prime = true;
        for (let j = 2; j < i; j++) {
          if (i % j === 0) {
            prime = false;
            break;
          }
        }
        if (prime) {
          col = "red-block";
        }
      }
    }
    numbers.push(
      <div key={i} className={`block ${col}`}>
        {i}
      </div>
    );
  }
  return <div className="container">{numbers}</div>;
}
