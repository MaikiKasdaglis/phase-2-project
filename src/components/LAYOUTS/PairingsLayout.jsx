import { NavLink, Outlet } from "react-router-dom";
import pairingStore from "../../hooks/pairingStore";
import monthStore from "../../hooks/monthStore";

export default function PairingsLayout() {
  const { setCurrentPairingIndex } = pairingStore();
  const { setCurrentMonthIndex } = monthStore();
  return (
    <div className="pairings-layout">
      <nav>
        <h1>This Months Pairings</h1>
        <NavLink to="pairing-1" onClick={() => setCurrentPairingIndex(1)}>
          Pairing 1
        </NavLink>
        <NavLink to="pairing-2">Pairing 2</NavLink>
        <NavLink to="pairing-3">Pairing 3</NavLink>
        <NavLink to="pairing-4">Pairing 4</NavLink>
        <NavLink to="pairing-5">Pairing 5</NavLink>
        <NavLink to="pairing-6">Pairing 6</NavLink>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
