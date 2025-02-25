import { useState } from "react";
import ChildStateComponent from "./child_state_component";

export default function ParentStateComponent() {
  const [counter, setCounter] = useState(123);
  return (
    <div>
      <h2>Counter {counter}</h2>
      <ChildStateComponent
        counter={counter}
        setCounter={setCounter} />
      <hr />
    </div>
  );
}
