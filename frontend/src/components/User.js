import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Navbar } from "./navbar/Navbar";
import { Dashboard } from "../pages/dashboard/Dashboard";
import Homepage from "../pages/homepage/Homepage";
import Landingpage from "../pages/landingpage/Landingpage";
import Signin from "../pages/signinsignup/Signin";
import Signup from "../pages/signinsignup/Signup";
import Personaldata from "../pages/dashboard/dashboardpages/Personaldata";
import Myclasses from "../pages/dashboard/dashboardpages/Myclasses";
import Classesnotes from "../pages/dashboard/dashboardpages/Classesnotes";
import Scores from "../pages/dashboard/dashboardpages/Scores";

const ProtectedRoute = ({ children }) => {
  const currUser = useSelector((state) => state.user.currUser);
  return currUser ? children : <Navigate to="/landing" replace />;
};

const PublicRoute = ({ children }) => {
  const currUser = useSelector((state) => state.user.currUser);
  return !currUser ? children : <Navigate to="/home" replace />;
};

const User = () => {
  const currUser = useSelector((state) => state.user.currUser);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   // Check localStorage for user data on app load
  //   const storedUser = localStorage.getItem("currUser");
  //   if (storedUser) {
  //     dispatch(setCurrUser(JSON.parse(storedUser))); // Hydrate the state with stored user data
  //   }
  // }, [dispatch]);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              currUser ? (
                <Navigate to="/home" replace />
              ) : (
                <Navigate to="/landing" replace />
              )
            }
          />
          <Route
            path="/landing"
            element={
              <PublicRoute>
                <Landingpage />
              </PublicRoute>
            }
          />
          <Route
            path="/signin"
            element={
              <PublicRoute>
                <Signin />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <Signup />
              </PublicRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route
              path="personaldata"
              element={
                <ProtectedRoute>
                  <Personaldata />
                </ProtectedRoute>
              }
            />
            <Route
              path="myclasses"
              element={
                <ProtectedRoute>
                  <Myclasses />
                </ProtectedRoute>
              }
            />
            <Route
              path="classesnotes"
              element={
                <ProtectedRoute>
                  <Classesnotes />
                </ProtectedRoute>
              }
            />
             <Route
              path="scores"
              element={
                <ProtectedRoute>
                  <Scores/>
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default User;
