import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Stack,
  Box,
} from "@mui/material";
import { Group } from "@mui/icons-material";

type Props = {
  handleForm(): void;
};

export default function NavBar({ handleForm }: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundImage:
            "linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
              <Group fontSize="large" />
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                Reactivities
              </Typography>
            </Stack>

            <Stack direction="row">
              <Button
                color="inherit"
                sx={{
                  fontSize: "1.2rem",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                Activities
              </Button>
              <Button
                color="inherit"
                sx={{
                  fontSize: "1.2rem",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                About
              </Button>
              <Button
                color="inherit"
                sx={{
                  fontSize: "1.2rem",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                Contact
              </Button>
            </Stack>

            <Button
              onClick={handleForm}
              size="large"
              variant="contained"
              color="warning"
            >
              Create Activity
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
