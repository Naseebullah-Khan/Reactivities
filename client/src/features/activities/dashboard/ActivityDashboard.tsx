import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";
import ActivityForm from "../form/ActivityForm";

type Props = {
  activities: Activity[];
  activity: Activity | undefined;
  handleActivity(id: string): void;
  cancelActivity(): void;
  handleForm(id?: string): void;
  editMode: boolean;
  closeForm(): void;
};

export default function ActivityDashboard({
  activities,
  activity,
  handleActivity,
  cancelActivity,
  handleForm,
  editMode,
  closeForm,
}: Props) {
  return (
    <Grid container spacing={3}>
      <Grid size={7}>
        <ActivityList activities={activities} handleActivity={handleActivity} />
      </Grid>
      <Grid size={5}>
        {activity && !editMode && (
          <ActivityDetail
            activity={activity}
            cancelActivity={cancelActivity}
            handleForm={handleForm}
          />
        )}
        {editMode && <ActivityForm closeForm={closeForm} activity={activity} />}
      </Grid>
    </Grid>
  );
}
