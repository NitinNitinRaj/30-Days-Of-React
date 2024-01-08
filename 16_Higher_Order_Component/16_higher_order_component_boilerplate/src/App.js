import Button from "./components/Button";
import chooseButton from "./util/chooseButton";

export default function App() {
  const DefaultButton = chooseButton(Button);
  const ReactButton = chooseButton(Button, "react");
  return (
    <div>
      <DefaultButton
        onClick={() => alert("Default button")}
        text="Default button"
      />
      <ReactButton onClick={() => alert("React button")} text="React button" />
    </div>
  );
}
