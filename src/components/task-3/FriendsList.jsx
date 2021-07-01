import style from "./friendsList.module.css";
import Friend from "./Friend.jsx";

export default function FriendsList({ items }) {
  return (
    <ul className={style.list}>
      {items.map((item) => (
        <Friend
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
}
