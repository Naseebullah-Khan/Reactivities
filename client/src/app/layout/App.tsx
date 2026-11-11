import { useEffect, useState } from "react";
import { CssBaseline, Container, Box } from "@mui/material";
import axios from "axios";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [activity, setActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get("https://localhost:5001/api/activities")
      .then((res) => setActivities(res.data));
  }, []);

  function handleActivity(id: string) {
    setActivity(activities.find((activity) => activity.id === id));
  }

  function cancelActivity() {
    setActivity(undefined);
  }

  function handleForm(id?: string) {
    if (id) {
      handleActivity(id);
    } else {
      cancelActivity();
    }
    setEditMode(true);
  }

  function closeForm() {
    setEditMode(false);
  }

  return (
    <Box sx={{ bgcolor: "#eeeeee" }}>
      <CssBaseline />
      <NavBar handleForm={handleForm} />
      <Container maxWidth="xl" sx={{ mt: 3, pb: 3 }}>
        <ActivityDashboard
          activities={activities}
          activity={activity}
          handleActivity={handleActivity}
          cancelActivity={cancelActivity}
          handleForm={handleForm}
          editMode={editMode}
          closeForm={closeForm}
        />
      </Container>
    </Box>
  );
}

export default App;
