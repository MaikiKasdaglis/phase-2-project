import { NavLink, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <nav>
        <h1>Month</h1>
        <NavLink to="Jan">Jan</NavLink>
        <NavLink to="Feb">Feb</NavLink>
        <NavLink to="Mar">Mar</NavLink>
        <NavLink to="Apr">Apr</NavLink>
        <NavLink to="May">May</NavLink>
        <NavLink to="Jun">Jun</NavLink>
        <NavLink to="Jul">Jul</NavLink>
        <NavLink to="Aug">Aug</NavLink>
        <NavLink to="Sep">Sep</NavLink>
        <NavLink to="Oct">Oct</NavLink>
        <NavLink to="Nov">Nov</NavLink>
        <NavLink to="Dec">Dec</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
