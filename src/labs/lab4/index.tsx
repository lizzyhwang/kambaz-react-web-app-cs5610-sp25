import ClickEvent from "./click_event";
import PassingDataOnEvent from "./passing_data_on_event";
import PassingFunctions from "./passing_functions";
import EventObject from "./event_object";
import Counter from "./counter";
import BooleanStateVariables from "./boolean_state_variables";
import StringStateVariables from "./string_state_variables";
import DateStateVariable from "./date_state_variables";
import ObjectStateVariable from "./object_state_variables";
import ArrayStateVariable from "./array_state_variable";
import ParentStateComponent from "./parent_state_component";
import ReduxExamples from "./redux_examples";


export default function Lab4() {
  function sayHello() {
    alert("Hello");
  }

  return (
    <div id="wd-lab3">
      <h2>Lab 4</h2>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions theFunction={sayHello} />
      <EventObject />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ParentStateComponent />
      <ReduxExamples />
    </div>
  );
}