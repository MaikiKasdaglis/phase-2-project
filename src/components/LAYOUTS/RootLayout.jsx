import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>SWA Pay Tracker</h1>
          <NavLink to="/">Login</NavLink>
          <NavLink to="dashboard-layout">Dashboard</NavLink>
          <NavLink to="current-pairing">Current</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
