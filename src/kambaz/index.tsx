import { Routes, Route, Navigate } from "react-router";
import Account from "./account";
import { Dashboard } from "./dashboard";
import KambazNavigation from "./navigation";
import Courses from "./courses";
import "./styles.css";
import ProtectedRoute from "./account/protected_route";
import { useSelector } from "react-redux";
import Session from "./account/session";
import * as userClient from "./account/client"
import { useEffect, useState } from "react";

export default function Kambaz() {
  const [courses, setCourses] = useState<any[]>([]);

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchCourses = async () => {
    try {
      const courses = await userClient.findMyCourses(currentUser);
      setCourses(courses);
      console.log(courses);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [currentUser]);


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
                <Dashboard courses={courses} />
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