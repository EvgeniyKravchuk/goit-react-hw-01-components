import style from "./statistics.module.css";
import StatisticsListItem from "./StatisticsListItems.jsx";

export default function Statistics({ items }) {
  return (
    <section className={style.statistics}>
      <h2 className={style.title}>Upload stats</h2>
      <ul className={style.list}>
        {items.map((item) => (
          <li key={item.id} className={style.item}>
            <StatisticsListItem
              label={item.label}
              percentage={item.percentage}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
