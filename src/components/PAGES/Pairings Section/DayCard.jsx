/* eslint-disable react/prop-types */
export default function DayCard({ item }) {
  const { day, dblHalf, holiday, overrides, overtime, reserve, tfp, faA } =
    item;

  return (
    <div className="day-card">
      <h3>Day: {day}</h3>
      <h5>TFP: {tfp}</h5>
      <h5>Overtime: {overtime}</h5>
      <h5>Double & Half: {dblHalf}</h5>
      <h5>Holiday: {holiday}</h5>
      <h5>Overrides: {overrides}</h5>
      <h5>Reserve: {reserve ? "Yes" : "No"}</h5>
      <h5>A Position: {faA ? "Yes" : "No"}</h5>
    </div>
  );
}
