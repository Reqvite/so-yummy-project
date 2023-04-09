import {
  Wrap,
  ImageErrorWrap,
  InputsContainer,
  TitleInput,
  MessageErrorWrap,
  DescriptionErrorWrap,
  DescriptionInput,
  CategoryWrap,
  CategoryInput,
  TimeWrap,
  TimeInput,
  ErrorText,
} from "../RecipeDescriptionFields/RecipeDescriptionFields.styled";

import Image from "../RecipeDescriptionFields/Image/Image";
import DropDownList from "../DropDownList/DropDownList";
import { allTime } from "../../../data/addRecipe";

const RecipeDescriptionFields = ({
  allCategory,
  image: { fullImage, setFullImage },
  name: { title, setTitle },
  descriptionData: { description, setDescription },
  categoryData: { category, setCategory },
  cokingTime: { time, setTime },
  formErrors = {},
}) => {
  return (
    <Wrap>
      <ImageErrorWrap>
        <Image imgAdd={fullImage} setImgAdd={setFullImage} />
        {formErrors?.fullImage && (
          <ErrorText>{formErrors?.fullImage}</ErrorText>
        )}
      </ImageErrorWrap>

      <InputsContainer>
        <MessageErrorWrap>
          <TitleInput
            type="text"
            name="title"
            autoComplete="off"
            value={title}
            placeholder="Enter item title"
            onChange={(e) => setTitle(e.target.value)}
          />

          {formErrors?.title && <ErrorText>{formErrors.title}</ErrorText>}
        </MessageErrorWrap>

        <DescriptionErrorWrap>
          <DescriptionInput
            type="text"
            name="description"
            autoComplete="off"
            placeholder="Enter about recipe"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {formErrors?.description && (
            <ErrorText>{formErrors?.description}</ErrorText>
          )}
        </DescriptionErrorWrap>

        <CategoryWrap>
          <CategoryInput
            type="text"
            readOnly="readonly"
            placeholder="Category"
          />

          <DropDownList
            list={allCategory}
            option={category}
            setOption={setCategory}
          />
        </CategoryWrap>

        <TimeWrap>
          <TimeInput type="text" placeholder="Cooking time" />

          <DropDownList list={allTime} option={time} setOption={setTime} />
        </TimeWrap>
      </InputsContainer>
    </Wrap>
  );
};

export default RecipeDescriptionFields;
