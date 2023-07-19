import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
//PAGE
import Login from "./PAGES/Login";
import PairingCard from "./PAGES/Pairings Section/PairingCard";
import DayForm, { dayFormAction } from "./PAGES/Pairings Section/DayForm";
import PairingForm, {
  pairingFormAction,
} from "./PAGES/Pairings Section/PairingForm";

// import CurrentPairing from "./PAGES/CurrentPairing";
//LAYOUTS
import RootLayout from "./LAYOUTS/RootLayout";
import DashboardLayout from "./LAYOUTS/DashboardLayout";
import MonthLayout from "./LAYOUTS/MonthLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Login />} />
      <Route path="dashboard-layout" element={<DashboardLayout />}>
        <Route path=":month" element={<MonthLayout />}>
          <Route path=":pairing" element={<PairingCard />} />
        </Route>
      </Route>
      <Route
        path="pairing-form"
        element={<PairingForm />}
        action={pairingFormAction}
      />
      <Route path="day-form" element={<DayForm />} action={dayFormAction} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
