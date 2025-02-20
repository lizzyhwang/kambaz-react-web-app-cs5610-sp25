import VariablesAndConstants from "./variables_and_constants";
import VariableTypes from "./variable_types"
import BooleanVariables from "./boolean_variables";
import IfElse from "./if_else"
import TernaryOperator from "./ternary_operator";
import ConditionalOutputIfElse from "./conditional_output_if_else";
import ConditionalOutputInline from "./conditional_output_inline";
import LegacyFunctions from "./legacy_functions";
import ArrowFunctions from "./arrow_functions";
import ImpliedReturn from "./implied_return"
import TemplateLiterals from "./template_literals";
import SimpleArrays from "./simple_arrays"
import ArrayIndexAndLength from "./array_index_and_length";
import AddingAndRemovingToFromArrays from "./adding_and_removing_to_from_arrays";
import ForLoops from "./for_loops";
import MapFunction from "./map_function"
import FindFunction from "./find_function";
import FindIndex from "./find_index"
import FilterFunction from "./filter_function";
import JsonStringify from "./json_stringify";
import House from "./house";
import TodoList from "./todo/todo_list";
import Spreading from "./spreading"
import Destructing from "./destructing";
import FunctionDestructing from "./function_destructing";
import DestructingImports from "./destructing_imports";
import Classes from "./classes";
import Styles from "./styles"
import Add from "./add"
import Square from "./square";
import Highlight from "./highlight"
import PathParameters from "./path_parameters";

export default function Lab3() {
  console.log('Hello World!');

  return (
    <div id="wd-lab3">
      <h2>Lab 3</h2>
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />
      <IfElse />
      <TernaryOperator />
      <ConditionalOutputIfElse />
      <ConditionalOutputInline />
      <LegacyFunctions />
      <ArrowFunctions />
      <ImpliedReturn />
      <TemplateLiterals />
      <SimpleArrays />
      <ArrayIndexAndLength />
      <AddingAndRemovingToFromArrays />
      <ForLoops />
      <MapFunction />
      <FindFunction />
      <FindIndex />
      <FilterFunction />
      <JsonStringify />
      <House />
      <TodoList />
      <Spreading />
      <Destructing />
      <FunctionDestructing />
      <DestructingImports />
      <Classes />
      <Styles />
      <Add a={3} b={4} />
      <h4>Square of 4</h4>
      <Square>4</Square>
      <hr />
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
      </Highlight>
      <PathParameters />

    </div>);
}