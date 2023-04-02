import { Box, ErrorIcon, Text, Title } from "./NotFoundBox.styled";

const NotFoundBox = () => {
  return (
    <Box>
      <ErrorIcon />
      <Title>We are sorry,</Title>
      <Text> but the page you were looking for can’t be found..</Text>
    </Box>
  );
};

export default NotFoundBox;
