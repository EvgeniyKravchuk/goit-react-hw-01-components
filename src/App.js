import style from "./App.module.css";
import Profile from "./components/task-1/Profile";
import profileData from "./components/task-1/user.json";
import StatisticsList from "./components/task-2/StatisticsList.jsx";
import StatisticsListData from "./components/task-2/statistics.json";
import FriendList from "./components/task-3/FriendsList.jsx";
import FriendListData from "./components/task-3/friends.json";
import Transactions from "./components/task-4/Transactions.jsx";
import TransactionsData from "./components/task-4/transactions.json";

function App() {
  return (
    <div className={style.container}>
      <Profile
        avatar={profileData.avatar}
        name={profileData.name}
        tag={profileData.tag}
        location={profileData.location}
        stats={profileData.stats}
      />
      <StatisticsList items={StatisticsListData} />
      <FriendList items={FriendListData} />
      <Transactions items={TransactionsData} />
    </div>
  );
}

export default App;
