import { Form, redirect } from "react-router-dom";

import monthStore from "../../../hooks/monthStore";

function PairingForm() {
  const { currentMonthIndex } = monthStore();
  return (
    <div className="pairing-form">
      <div className="tfp-inputs">
        <Form className="actual-form" method="post" action="/pairing-form">
          <label>
            <input type="hidden" name="index" value={currentMonthIndex} />
          </label>
          <label>
            <span> TAFB HOURS:</span>
            <input type="number" name="tafb" />
          </label>
          <label>
            <span> TAFB INTERNATIONAL:</span>
            <input type="number" name="tafbInt" />
          </label>
          <button>Submit</button>
        </Form>
      </div>
    </div>
  );
}

export const pairingFormAction = async ({ request }) => {
  console.log(`request object`, request);

  const data = await request.formData();
  let monthIndex = data.get("index");
  console.log(data);
  const submission = {
    monthId: parseInt(data.get("index")),
    tafb: parseInt(data.get("tafb")),
    tafbInt: parseInt(data.get("tafbInt")),
  };
  console.log(`submission object`, submission);
  // fetch
  //send post request here
  fetch("http://localhost:3000/pairings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(submission),
  });
  //make an error message
  return redirect(`/dashboard-layout/${monthIndex}`);
};
export default PairingForm;

//THI STUFF WILL BE FOR DAYS FORM
