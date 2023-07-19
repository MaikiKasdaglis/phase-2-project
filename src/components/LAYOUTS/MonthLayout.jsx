// hooks
import { Outlet, NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import monthStore from "../../hooks/monthStore";
// components
import Dashboard from "../PAGES/DashboardComponents/Dashboard";
import pairingStore from "../../hooks/pairingStore";

export default function MonthLayout() {
  const { currentMonthIndex } = monthStore();
  const { setCurrentPairingIndex } = pairingStore();

  const [month, setMonth] = useState(undefined);
  useEffect(() => {
    fetch(` http://localhost:3000/months/${currentMonthIndex}`)
      .then((r) => r.json())
      .then((d) => setMonth(d));
  }, [currentMonthIndex]);

  const totalTime = month?.pairings?.reduce((sum, obj) => sum + obj.tafb, 0);
  const totalIntTime = month?.pairings?.reduce(
    (sum, obj) => sum + obj.tafbInt,
    0
  );

  return (
    <div className="dashboard-layout">
      <nav>
        <h1>{month?.month}</h1>
        <Link to={"/pairing-form"}>Add Pairing To Selected Month</Link>
        {month?.pairings?.map((pairing) => (
          <NavLink
            key={pairing.id}
            to={`pairing-${pairing.id}`}
            onClick={() => setCurrentPairingIndex(pairing.id)}
          >
            Pairing {pairing.id}
          </NavLink>
        ))}
      </nav>
      <div>
        <Dashboard
          currentMonthIndex={currentMonthIndex}
          totalTime={totalTime}
          totalIntTime={totalIntTime}
        />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
