import MainPageTitle from "../Components/ui/MainPageTitle/MainPageTitle";
import AddRecipeForm from "../Components/AddRecipeForm/AddRecipeForm";
import FollowUs from "Components/Footer/FollowUs/FollowUs";

import {
  AddRecipeWrap,
  FollowUsAndPopularWrap,
  GeneralWrap,
} from "../Components/AddRecipeForm/AddrecipeForm.styled";

import { useMediaQuery } from "@mui/material";
import PopularList from "Components/ui/PopularList/PopularList";

const AddRecipe = () => {
  const isMobileAndTablet = useMediaQuery("(max-width: 1440px)");

  return (
    <AddRecipeWrap>
      <MainPageTitle title={"Add recipe"} />

      <GeneralWrap>
        <AddRecipeForm />

        {!isMobileAndTablet && (
          <FollowUsAndPopularWrap>
            <FollowUs text={"Follow Us"} onAddRecipePage={true} />
            <PopularList />
          </FollowUsAndPopularWrap>
        )}

        {isMobileAndTablet && <PopularList />}
      </GeneralWrap>
    </AddRecipeWrap>
  );
};

export default AddRecipe;
