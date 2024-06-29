import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <>
      <div name="TransactionHistory">
        <h2 className={css.title}>TransactionHistory</h2>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.type}</td>
                  <td>{item.amount}</td>
                  <td>{item.currency}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TransactionHistory;
