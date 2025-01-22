import { Route, Routes, Navigate } from "react-router";
import TOC from "./toc";
import Lab1 from "./lab1"
import Lab2 from "./lab2"
import Lab3 from "./lab3"

export default function Labs() {
  return (
    <div>
      <h1>Elizabeth Hwang</h1>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2/*" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
    </div>
  );
}