import Profile from "./components/task-1/Profile";
import profileData from "./components/task-1/user.json";

function App() {
  return (
    <div className="container">
      <Profile
        avatar={profileData.avatar}
        name={profileData.name}
        tag={profileData.tag}
        location={profileData.location}
        stats={profileData.stats}
      />
    </div>
  );
}

export default App;
