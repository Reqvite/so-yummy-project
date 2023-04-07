import { Wrap } from "../RecipeDescriptionFields/RecipeDescriptionFields.styled";
import Image from "../RecipeDescriptionFields/Image/Image";
import DropDownList from "../DropDownList/DropDownList";

const allTime = [
  "5 min",
  "10 min",
  "15 min",
  "20 min",
  "25 min",
  "30 min",
  "35 min",
  "40 min",
  "45 min",
  "50 min",
  "55 min",
  "60 min",
  "65 min",
  "70 min",
  "75 min",
  "80 min",
  "85 min",
  "90 min",
  "95 min",
  "100 min",
  "105 min",
  "110 min",
  "115 min",
  "120 min",
];
const RecipeDescriptionFields = ({
  allCategory,
  image: { fullImage, setFullImage },
  name: { title, setTitle },
  descriptionData: { description, setDescription },
  categoryData: { category, setCategory },
  cokingTime: { time, setTime },
}) => {
  return (
    <Wrap>
      <Image imgAdd={fullImage} setImgAdd={setFullImage} />

      <input
        type="text"
        name="title"
        autoComplete="off"
        value={title}
        placeholder="Enter item title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        name="description"
        autoComplete="off"
        placeholder="Enter about recipe"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input type="text" readOnly="readonly" placeholder="Category" />

      <DropDownList
        list={allCategory}
        option={category}
        setOption={setCategory}
      />

      <input type="text" placeholder="Cooking time" />

      <DropDownList list={allTime} option={time} setOption={setTime} />
    </Wrap>
  );
};

export default RecipeDescriptionFields;
