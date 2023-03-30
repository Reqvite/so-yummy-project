import { Link } from "react-router-dom";
import { Box, Container, Heading, List } from "./AuthNav.styled";

const AuthNav = () => {
  return (
    <Container>
      <Box>
        <Heading>Welcome to the app</Heading>
        <p>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </p>
        <List>
          <li>
            <Link to="/register">Registration</Link>
          </li>
          <li>
            <Link to="/signin">Sign in</Link>
          </li>
        </List>
      </Box>
    </Container>
  );
};

export default AuthNav;
