export default function HexaColors({ max }) {
  let colors = [];
  for (let i = 0; i <= max; i++) {
    let str = "0123456789abcdef";
    let color = "";
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length);
      color += str[index];
    }

    colors.push(
      <div key={i} className={`block`} style={{ background: `#${color}` }}>
        {"#" + color}
      </div>
    );
  }
  return <div className="container">{colors}</div>;
}
