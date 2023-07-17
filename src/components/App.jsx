import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//PAGE
import Login from "./PAGES/Login";
import Pairing1 from "./PAGES/Pairings Section/Pairing1";
// import CurrentPairing from "./PAGES/CurrentPairing";
//LAYOUTS
import RootLayout from "./LAYOUTS/RootLayout";
import PairingsLayout from "./LAYOUTS/PairingsLayout";
import DashboardLayout from "./LAYOUTS/DashboardLayout";
import JanLayout from "./LAYOUTS/JanLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Login />} />
      {/* <Route path="dashboard" element={<Dashboard />} /> */}
      <Route path="dashboard-layout" element={<DashboardLayout />}>
        <Route path="Jan" element={<JanLayout />}>
          <Route path="pairing-1" element={<Pairing1 />} />
        </Route>
      </Route>
      <Route path="current-pairing" element={<PairingsLayout />}>
        <Route path="pairing-1" element={<Pairing1 />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
