import { RouteGenerator } from "other/router/routeGenerator/route-generator";
import { unAuth } from "other/router/routes";
import { generatePath, Navigate, Route, Routes } from "react-router-dom";
function App() {
  const unAuthRoutes = RouteGenerator(unAuth);

  return (
    <Routes>
      {unAuthRoutes}
      <Route path="*" element={<Navigate to={generatePath("/")} />} />
    </Routes>
  );
}

export default App;
