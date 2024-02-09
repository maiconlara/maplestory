import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Error from "../pages/error";
import Home from "../pages/home";
import HeaderLayout from "./HeaderLayout";

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route element={<HeaderLayout />}>
          <Route element={<Home />} path="/" />
          <Route element={<Error />} path="*" />
        </Route>
      </Routes>
    </Router>
  );
};
export default Root;
