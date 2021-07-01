import TransactionsRow from "./TransactionRow.jsx";
import style from "./transactions.module.css";

export default function Transactions({ items }) {
  return (
    <div className={style.container}>
      <table className={style.table}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <TransactionsRow
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
