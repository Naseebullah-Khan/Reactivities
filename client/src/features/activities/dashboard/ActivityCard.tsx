import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";

type Props = {
  activity: Activity;
  handleActivity(id: string): void;
};

export default function ActivityCard({ activity, handleActivity }: Props) {
  const { id, title, description, date, city, venue, category } = activity;

  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography sx={{ color: "text.secondary", mb: 1 }}>{date}</Typography>
        <Typography variant="body2">{description}</Typography>
        <Typography variant="subtitle1">
          {city} / {venue}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "space-between", pb: 2 }}
      >
        <Chip label={category} variant="outlined" />
        <Button
          onClick={() => handleActivity(id)}
          size="medium"
          variant="contained"
          sx={{ borderRadius: 3 }}
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
}
