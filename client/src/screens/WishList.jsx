import {
  Link,
  Box,
  Toolbar,
  Button,
  IconButton,
  SearchIcon,
  Typography,
  Container,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Grid,
} from "@mui/material";

export default function WishList(props) {
  const defaultTheme = createTheme();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Typography
        sx={{
            mb: 2
        }} variant="h2">Our Wish List</Typography>

        <Typography variant="p">
          We invite you to be part of our unique program design by thinking up
          different ways you can support our youth and mentors. ​ Below you'll
          find links to different programs. These links will take you to another
          page where you can commit to giving specific items that will enhance
          our programs. These items will give us the ability to support our
          youth and mentors in adventurous ways, and that will last a lifetime!!{" "}
        </Typography>

      </Container>
    </ThemeProvider>
  );
}
