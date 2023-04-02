import { Box, ErrorIcon, Text, Title } from "./ErrorBox.styled";

const ErrorBox = () => {
  return (
    <Box>
      <ErrorIcon />
      <Title>We are sorry,</Title>
      <Text> but the page you were looking for can’t be found..</Text>
    </Box>
  );
};

export default ErrorBox;
