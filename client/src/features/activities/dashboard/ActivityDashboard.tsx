import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";

type Props = {
  activities: Activity[];
  activity: Activity | undefined;
  handleActivity(id: string): void;
  cancelActivity(): void;
};

export default function ActivityDashboard({
  activities,
  activity,
  handleActivity,
  cancelActivity,
}: Props) {
  return (
    <Grid container spacing={3}>
      <Grid size={7}>
        <ActivityList activities={activities} handleActivity={handleActivity} />
      </Grid>
      <Grid size={5}>
        {activity && (
          <ActivityDetail activity={activity} cancelActivity={cancelActivity} />
        )}
      </Grid>
    </Grid>
  );
}
