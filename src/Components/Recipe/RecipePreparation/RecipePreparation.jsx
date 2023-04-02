import { nanoid } from "@reduxjs/toolkit";
import {
  Box,
  Img,
  Item,
  List,
  MainBox,
  Span,
  SpanBox,
  Text,
  Title,
} from "./RecipePreparation.styled";

const RecipePreparation = ({ preview, title, instructions }) => {
  const cleanedInstructions = instructions?.replace(/^\d+\)\s*/gm, "");
  const sentences = cleanedInstructions?.split(/(?:\.|\?|!)\s/g);
  const steps = sentences?.map((sentence) =>
    sentence.replace(/^\d+\)/, "").trim()
  );

  return (
    <MainBox>
      <Title>Recipe Preparation</Title>
      <Box>
        <List>
          {steps?.map((el, idx) => (
            <Item key={nanoid()}>
              <SpanBox>
                <Span>{idx + 1}</Span>
              </SpanBox>
              <Text>{el}</Text>
            </Item>
          ))}
        </List>
        <Img alt={title} src={preview} width={343} />
      </Box>
    </MainBox>
  );
};

export default RecipePreparation;
