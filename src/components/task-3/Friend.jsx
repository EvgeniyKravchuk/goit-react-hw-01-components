import PropTypes from "prop-types";
import style from "./friendsList.module.css";

const defaultImage =
  "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";

export default function Friend({ avatar = defaultImage, name, isOnline }) {
  return (
    <li className={style.item}>
      <span className={isOnline ? style.status : style.statusOff}></span>
      <img
        className={style.avatar}
        src={avatar}
        alt="Аватар профиля"
        width="48"
      />
      <p className={style.name}>{name}</p>
    </li>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
