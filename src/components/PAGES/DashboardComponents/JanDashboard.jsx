export default function JanDashboard() {
  return (
    <div className="dashboard">
      <h2>Monthly Totals</h2>

      <table className="a-pay">
        <thead>
          <tr>
            <th>A Pay</th>
            <th>CREDITS</th>
            <th>PAY</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>FA-A</td>
            <td>NEED MONTHLY DATA HERE</td>
            <td>NEED MONTHLY DATA HERE</td>
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
            <td>month ttl credits in catagory</td>
            <td>1.00</td>
            <td>month ttl credits after multiplier</td>
            <td>month ttl pay for TFP category</td>
          </tr>
          <tr>
            <th>Holiday</th>
            <td>month ttl credits in catagory</td>
            <td>2.00</td>
            <td>month ttl credits after multiplier</td>
            <td>month ttl pay for Holiday category </td>
          </tr>
          <tr>
            <th>Overtime</th>
            <td>month ttl credits in catagory</td>
            <td>1.5</td>
            <td>month ttl credits after multiplier</td>
            <td>month ttl pay for Overtime category </td>
          </tr>
          <tr>
            <th>Double Time</th>
            <td>month ttl credits in catagory</td>
            <td>1.5</td>
            <td>month ttl credits after multiplier</td>
            <td>month ttl pay for Double Time category </td>
          </tr>
          <tr>
            <th>Rerserve No Fly</th>
            <td>month ttl credits in catagory</td>
            <td>1.5</td>
            <td>month ttl credits after multiplier</td>
            <td>month ttl pay for Rerserve No Fly category </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Total Credits</th>
            <th>this whole column totaled^^</th>
            <th>Total Credits After Multiplier</th>
            <th>this whole column totaled^^</th>
            <th>this whole column totaled^^</th>
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
            <td>total hours from category </td>
            <td>$2.35</td>
            <td>hours * rate</td>
          </tr>
          <tr>
            <th>TAFB International:</th>
            <td>total hours from category </td>
            <td>$2.85</td>
            <td>hours * rate</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Total TAFB</th>
            <th>total hours from column</th>
            <th>Total TAFB PAY:</th>
            <th>total pay from column</th>
          </tr>
        </tfoot>
      </table>
      <table className="overrides" style={{ marginBottom: 0 }}>
        <thead>
          <tr>
            <th>PAIRINGS</th>
            <th>Pairing 1</th>
            <th>Pairing 2</th>
            <th>Pairing 3</th>
            <th>Pairing 4</th>
            <th>Pairing 5</th>
            <th>Pairing 6</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Overrides</th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
      <table className="overrides-ttl" style={{ marginTop: 0 }}>
        <tbody>
          <tr>
            <th> Total Overrides</th>
            <th> sum</th>
            <th>Overrides Pay:</th>
            <th>$totalOverrides * $5</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
