import PropTypes from "prop-types";
import style from "./statistics.module.css";

export default function StatisticsListItem({ label, percentage }) {
  return (
    <>
      <span className={style.label}>{label}</span>
      <span className={style.percentage}>{percentage}</span>
    </>
  );
}

StatisticsListItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
