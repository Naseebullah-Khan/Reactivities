import { useEffect, useState } from "react";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("https://localhost:5001/api/activities")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  return (
    <section>
      <h1 className="title" style={{ color: "red" }}>
        Reactivities
      </h1>
      <ol>
        {activities.map((activity) => (
          <li key={activity.id}>
            <h2>{activity.title}</h2>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default App;
