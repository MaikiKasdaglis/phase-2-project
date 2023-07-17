import { NavLink, Outlet } from "react-router-dom";
import JanDashboard from "../PAGES/DashboardComponents/JanDashboard";

export default function JanLayout() {
  return (
    <div className="dashboard-layout">
      <nav>
        <h1>January Pairings</h1>
        {/* =====THIS IS JUST HERE AS A PLACE HODER FOR NOW. IN THE FUTURE, THERE WILL BE LINKS TO THE MONTHS RELEVANT DATA FROM THE DB */}
        <NavLink to="pairing-1">Pairing 1</NavLink>
        <NavLink to="pairing-2">Pairing 2</NavLink>
        <NavLink to="pairing-3">Pairing 3</NavLink>
        <NavLink to="pairing-4">Pairing 4</NavLink>
        <NavLink to="pairing-5">Pairing 5</NavLink>
        <NavLink to="pairing-6">Pairing 6</NavLink>
      </nav>
      <div>
        <JanDashboard />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
