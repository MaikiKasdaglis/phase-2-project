import { useEffect, useState } from "react";
export default function Dashboard({
  currentMonthIndex,
  totalTime,
  totalIntTime,
}) {
  const [daysData, setDaysData] = useState([]);
  const [ttlsObj, setTtlsObj] = useState({
    tfp: 0,
    holiday: 0,
    overtime: 0,
    dblHalf: 0,
    overrides: 0,
  });

  useEffect(() => {
    const tfp = totalFunction("tfp");
    const holiday = totalFunction("holiday");
    const overtime = totalFunction("overtime");
    const dblHalf = totalFunction("dblHalf");
    const overrides = totalFunction("overrides");
    const newTtlsObj = {
      tfp: tfp,
      holiday: holiday,
      overtime: overtime,
      dblHalf: dblHalf,
      overrides: overrides,
    };
    setTtlsObj(newTtlsObj);
  }, [daysData]);

  useEffect(() => {
    fetch(` http://localhost:3000/months/${currentMonthIndex}/days`)
      .then((r) => r.json())
      .then((d) => setDaysData(d));
  }, [currentMonthIndex]);

  function totalFunction(catagory) {
    const totalCredits = daysData.reduce((sum, obj) => sum + obj[catagory], 0);
    const formattedCredits = totalCredits.toFixed(2);
    return formattedCredits;
  }
  function totalCredits(catagory, multiplier) {
    const totalCredits = daysData.reduce((sum, obj) => sum + obj[catagory], 0);
    const formattedCredits = totalCredits.toFixed(2) * multiplier;
    return formattedCredits;
  }

  const filteredArray = daysData.filter((obj) => obj.faA === true);
  const sum = filteredArray.reduce((acc, obj) => {
    acc += obj.tfp + obj.holiday + obj.overtime + obj.dblHalf;
    return acc;
  }, 0);

  const rate = 25.46;

  return (
    <div className="dashboard">
      <h2>Monthly Totals</h2>

      <table className="a-pay">
        <thead>
          <tr>
            <th>A Pay</th>
            <th>TOTAL CREDITS</th>
            <th>PAY</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>FA-A</td>
            <td>{sum}</td>
            <td>$ {sum * 2}</td>
          </tr>
        </tbody>
      </table>
      <table className="tfp-pay">
        <thead>
          <tr>
            <th>CATAGORY</th>
            <th>CREDITS</th>
            <th>RATE</th>
            <th>TOTAL</th>
            <th>PAY</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Credit (TFP)</th>
            <td>{ttlsObj.tfp}</td>
            <td>1.00</td>
            <td>{ttlsObj.tfp * 1}</td>
            <td>$ {ttlsObj.tfp * rate}</td>
          </tr>
          <tr>
            <th>Holiday</th>
            <td>{ttlsObj.holiday}</td>
            <td>2.00</td>
            <td>{ttlsObj.holiday * 2}</td>
            <td>$ {totalCredits("holiday", 2) * rate} </td>
          </tr>
          <tr>
            <th>Overtime</th>
            <td>{ttlsObj.overtime}</td>
            <td>1.5</td>
            <td>{totalCredits("overtime", 1.5)}</td>
            <td>$ {totalCredits("overtime", 1.5) * rate} </td>
          </tr>
          <tr>
            <th>Double Time</th>
            <td>{ttlsObj.dblHalf}</td>
            <td>2</td>
            <td>{totalCredits("dblHalf", 2)}</td>
            <td>$ {totalCredits("dblHalf", 2) * rate}</td>
          </tr>
          {/* <tr>
            <th>Rerserve No Fly</th>
            <td>month ttl credits in catagory</td>
            <td>1.5</td>
            <td>month ttl credits after multiplier</td>
            <td>month ttl pay for Rerserve No Fly category </td>
          </tr> */}
        </tbody>
        <tfoot>
          <tr>
            <th>Total Credits</th>
            <th>
              {parseFloat(ttlsObj.tfp) +
                parseFloat(ttlsObj.holiday) +
                parseFloat(ttlsObj.overtime) +
                parseFloat(ttlsObj.dblHalf)}
            </th>
            <th>Total Credits Paid</th>
            <th>
              {parseFloat(ttlsObj.tfp * 1) +
                parseFloat(ttlsObj.holiday * 2) +
                parseFloat(totalCredits("overtime", 1.5)) +
                parseFloat(totalCredits("dblHalf", 2))}
            </th>
            <th>
              ${" "}
              {(parseFloat(ttlsObj.tfp * 1) +
                parseFloat(ttlsObj.holiday * 2) +
                parseFloat(totalCredits("overtime", 1.5)) +
                parseFloat(totalCredits("dblHalf", 2))) *
                rate}
            </th>
          </tr>
        </tfoot>
      </table>
      <table className="time-away-base">
        <thead>
          <tr>
            <th></th>
            <th>Hours</th>
            <th>Rate</th>
            <th>Pay</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>TAFB:</th>
            <td>{totalTime}</td>
            <td>$2.35</td>
            <td>$ {totalTime * 2.35}</td>
          </tr>
          <tr>
            <th>TAFB International:</th>
            <td>{totalIntTime} </td>
            <td>$2.85</td>
            <td>$ {totalIntTime * 2.85}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Total TAFB:</th>
            <th>{totalTime + totalIntTime}</th>
            <th>Total TAFB PAY:</th>
            <th>$ {totalTime * 2.35 + totalIntTime * 2.85}</th>
          </tr>
        </tfoot>
      </table>

      <table className="overrides-ttl" style={{ marginTop: 0 }}>
        <tbody>
          <tr>
            <th> Total Overrides</th>
            <th> {ttlsObj.overrides}</th>
            <th>Overrides Pay:</th>
            <th> $ {ttlsObj.overrides * 5}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
