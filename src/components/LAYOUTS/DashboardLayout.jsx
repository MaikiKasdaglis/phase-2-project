import { NavLink, Outlet } from "react-router-dom";
import monthStore from "../../hooks/monthStore";

export default function DashboardLayout() {
  const { setCurrentMonthIndex } = monthStore();

  return (
    <div className="dashboard-layout">
      <nav>
        <h1>Month</h1>
        <NavLink onClick={() => setCurrentMonthIndex(1)} to="1">
          Jan
        </NavLink>
        <NavLink onClick={() => setCurrentMonthIndex(2)} to="2">
          Feb
        </NavLink>
        <NavLink onClick={() => setCurrentMonthIndex(3)} to="3">
          Mar
        </NavLink>
        <NavLink onClick={() => setCurrentMonthIndex(4)} to="4">
          Apr
        </NavLink>
        <NavLink onClick={() => setCurrentMonthIndex(5)} to="5">
          May
        </NavLink>
        <NavLink onClick={() => setCurrentMonthIndex(6)} to="6">
          Jun
        </NavLink>
        <NavLink onClick={() => setCurrentMonthIndex(7)} to="7">
          Jul
        </NavLink>
        <NavLink onClick={() => setCurrentMonthIndex(8)} to="8">
          Aug
        </NavLink>
        <NavLink onClick={() => setCurrentMonthIndex(9)} to="9">
          Sep
        </NavLink>
        <NavLink onClick={() => setCurrentMonthIndex(10)} to="10">
          Oct
        </NavLink>
        <NavLink onClick={() => setCurrentMonthIndex(11)} to="11">
          Nov
        </NavLink>
        <NavLink onClick={() => setCurrentMonthIndex(12)} to="12">
          Dec
        </NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
