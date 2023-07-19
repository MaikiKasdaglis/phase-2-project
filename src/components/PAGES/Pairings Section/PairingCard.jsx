import { Link } from "react-router-dom";
import pairingStore from "../../../hooks/pairingStore";
import DayCard from "./DayCard";
import { useState, useEffect } from "react";

export default function PairingCard() {
  const { currentPairingIndex } = pairingStore();
  const [pairing, setPairing] = useState({});
  const { tafb, tafbInt, days } = pairing;
  useEffect(() => {
    fetch(` http://localhost:3000/pairings/${currentPairingIndex}`)
      .then((r) => r.json())
      .then((d) => setPairing(d));
  }, [currentPairingIndex]);
  let dayCards;
  if (days !== undefined) {
    dayCards = days.map((item) => <DayCard key={item.id} item={item} />);
  }

  return (
    <div>
      <header className="card-header">
        <h2>TAFB: {tafb} </h2>
        <h2>TAFB International: {tafbInt} </h2>
        <Link to={"/day-form"}>Add Day To Selected Pairing</Link>
      </header>
      <div className="card-container">{dayCards}</div>
    </div>
  );
}
