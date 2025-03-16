import Labs from "./labs"
import Kambaz from "./kambaz";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import store from "./kambaz/store";
import { Provider } from "react-redux";

export default function App() {

  return (
    <HashRouter>
      <Provider store={store}>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Kambaz" />} />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kambaz/*" element={<Kambaz />} />
          </Routes>
        </div>
      </Provider>
    </HashRouter>
  )
}
