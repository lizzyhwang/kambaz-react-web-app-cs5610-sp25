import { Route, Routes, Navigate } from "react-router";
import TOC from "./toc";
import Lab1 from "./lab1"
import Lab2 from "./lab2"
import Lab3 from "./lab3"
import Lab4 from "./lab4"
import Lab5 from "./lab5";
import store from "./store";
import { Provider } from "react-redux";

export default function Labs() {
  return (
    <Provider store={store}>

      <div>
        <h1>Welcome to Web Dev</h1>
        <h2>Elizabeth Hwang</h2>
        <h5>Section 01</h5>
        <TOC />
        <Routes>
          <Route path="/" element={<Navigate to="Lab1" />} />
          <Route path="Lab1" element={<Lab1 />} />
          <Route path="Lab2/*" element={<Lab2 />} />
          <Route path="Lab3/*" element={<Lab3 />} />
          <Route path="Lab4/*" element={<Lab4 />} />
          <Route path="Lab5/*" element={<Lab5 />} />
        </Routes>
      </div>
    </Provider>
  );
}