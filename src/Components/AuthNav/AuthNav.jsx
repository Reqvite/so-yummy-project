import {
  Box,
  Button,
  Container,
  Heading,
  List,
  ListItem,
  Text,
} from "./AuthNav.styled";

const AuthNav = () => {
  return (
    <Container>
      <Box>
        <Heading>Welcome to the app</Heading>
        <Text>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </Text>
        <List>
          <ListItem>
            <Button to="/register">Registration</Button>
          </ListItem>
          <ListItem>
            <Button to="/signin">Sign in</Button>
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default AuthNav;
