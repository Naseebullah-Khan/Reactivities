import { useEffect, useState } from "react";
import { CssBaseline, Container, Box } from "@mui/material";
import axios from "axios";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios
      .get("https://localhost:5001/api/activities")
      .then((res) => setActivities(res.data));
  }, []);

  return (
    <Box sx={{ bgcolor: "#eeeeee" }}>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="xl" sx={{ mt: 3, pb: 3 }}>
        <ActivityDashboard activities={activities} />
      </Container>
    </Box>
  );
}

export default App;
