import { Routes, Route, Navigate } from "react-router";
import Account from "./account";
import { Dashboard } from "./dashboard";
import KambazNavigation from "./navigation";
import Courses from "./courses";
import "./styles.css";
import ProtectedRoute from "./account/protected_route";
import { useSelector } from "react-redux";
import Session from "./account/session";

export default function Kambaz() {
  const { courses } = useSelector((state: any) => state.coursesReducer);

  return (
    <Session>
      <div id="wd-kambaz">
        <KambazNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="/Dashboard/*" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </Session>
  );
}