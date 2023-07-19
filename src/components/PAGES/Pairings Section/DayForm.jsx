import { Form, redirect } from "react-router-dom";
import monthStore from "../../../hooks/monthStore";
import pairingStore from "../../../hooks/pairingStore";

function DayForm() {
  const { currentPairingIndex } = pairingStore();
  const { currentMonthIndex } = monthStore();

  return (
    <div>
      <h1>Fuch yea!</h1>
      <div className="tfp-inputs">
        <Form className="actual-form" method="post" action="/day-form">
          <label>
            <input
              type="hidden"
              name="pairing-index"
              value={currentPairingIndex}
            />
          </label>
          <label>
            <input type="hidden" name="index" value={currentMonthIndex} />
          </label>
          <label>
            <span> A-Position?:</span>
            <input type="checkbox" name="faA" />
          </label>
          <label>
            <span> Regular TFP:</span>
            <input type="number" name="tfp" defaultValue={0} />
          </label>
          <label>
            <span> Holiday:</span>
            <input type="number" name="holiday" defaultValue={0} />
          </label>
          <label>
            <span> Overtime:</span>
            <input type="number" name="overtime" defaultValue={0} />
          </label>
          <label>
            <span> Doubletime:</span>
            <input type="number" name="dblHalf" defaultValue={0} />
          </label>

          <label>
            <span> Overrides:</span>
            <input type="number" name="overrides" defaultValue={0} />
          </label>
          <label>
            <span> Day:</span>
            <input type="number" name="day" defaultValue={0} />
          </label>

          <button>Submit</button>
        </Form>
      </div>
    </div>
  );
}

export const dayFormAction = async ({ request }) => {
  console.log(`request object`, request);

  const data = await request.formData();
  let monthIndex = data.get("index");
  console.log(data);
  const submission = {
    //sub object goes here
    pairingId: parseInt(data.get("pairing-index")),
    monthId: parseInt(data.get("index")),
    faA: data.get("faA") === "on" ? true : false,
    tfp: parseInt(data.get("tfp")),
    holiday: parseInt(data.get("holiday")),
    overtime: parseInt(data.get("overtime")),
    dblHalf: parseInt(data.get("dblHalf")),
    overrides: parseInt(data.get("overrides")),
    day: parseInt(data.get("day")),
  };
  console.log(`submission object`, submission);

  //send post request here
  fetch("http://localhost:3000/days", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(submission),
  });

  //make an error message
  return redirect(`/dashboard-layout/${monthIndex}`);
};
export default DayForm;
