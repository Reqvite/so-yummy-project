import { useMediaQuery } from "@mui/material";
import Logo from "Components/ui/Logo/Logo";
import { useTheme } from "styled-components";
import {
  Box,
  Container,
  Heading,
  List,
  ListItem,
  MainButton,
  SecondaryButton,
  Svg,
  Text,
} from "./AuthNav.styled";

const AuthNav = () => {
  const theme = useTheme();
  const matches = useMediaQuery("(min-width:768px)");
  const mediaRule = matches ? 68 : 54;
  return (
    <Container>
      <Box>
        <Svg>
          <Logo width={mediaRule} height={mediaRule} />
        </Svg>
        <Heading>Welcome to the app</Heading>
        <Text>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </Text>
        <List>
          <ListItem>
            <MainButton
              whileHover={{
                backgroundColor: theme.colors.mainText,
              }}
              to="/register"
            >
              Registration
            </MainButton>
          </ListItem>
          <ListItem>
            <SecondaryButton
              whileHover={{
                backgroundColor: theme.colors.accentColor,
                borderColor: theme.colors.accentColor,
              }}
              to="/signin"
            >
              Sign in
            </SecondaryButton>
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default AuthNav;
