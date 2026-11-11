import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

type Props = {
  activity: Activity;
  cancelActivity(): void;
  handleForm: (id?: string) => void;
};

export default function ActivityDetail({
  activity,
  cancelActivity,
  handleForm,
}: Props) {
  const { id, title, description, category, date } = activity;

  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardMedia
        component="img"
        src={`/images/categoryImages/${category}.jpg`}
      />
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: "light" }}>
          {date}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" onClick={() => handleForm(id)}>
          Edit
        </Button>
        <Button onClick={cancelActivity} color="inherit">
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
}
