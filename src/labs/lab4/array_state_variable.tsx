import { useState } from "react";
import { Button } from "react-bootstrap";

export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };

  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <Button onClick={addElement}>Add Element</Button>
      <ul>
        {array.map((item, index) => (
          <li key={index}>
            {item}
            <Button onClick={() => deleteElement(index)}
              id="wd-delete-element-click"
              className="wd-button-basic">
              Delete</Button>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
