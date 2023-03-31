import Logo from "Components/ui/Logo/Logo";
import { useMedia } from "hooks/usemedia";
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
  const { width } = useMedia();
  const mediaRule = width >= 768 ? 68 : 54;
  return (
    <Container>
      <Box>
        <Logo width={mediaRule} height={mediaRule} />
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
