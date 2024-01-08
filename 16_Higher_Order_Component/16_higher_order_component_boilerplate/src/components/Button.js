export default function Button({ text, style, ...prop }) {
  return (
    <button {...prop} style={style}>
      {text}
    </button>
  );
}
