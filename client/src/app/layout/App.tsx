import { useEffect, useState } from "react";
import axios from "axios";
import { ListItem, List, ListItemText, CssBaseline } from "@mui/material";
import NavBar from "./NavBar";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios
      .get("https://localhost:5001/api/activities")
      .then((res) => setActivities(res.data));
  }, []);

  return (
    <>
      <CssBaseline />
      <NavBar />
      <List>
        {activities.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default App;
