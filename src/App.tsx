import Labs from "./labs"
import Kambaz from "./kambaz";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

export default function App() {

  return (
    <HashRouter>
      <div>
        <h1>Welcome to Web Dev</h1>
        <Routes>
          <Route path="/" element={<Navigate to="Kambaz" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kambaz/*" element={<Kambaz />} />
        </Routes>
      </div>
    </HashRouter>
  )
}
