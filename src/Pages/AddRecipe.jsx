import MainPageTitle from "../Components/ui/MainPageTitle/MainPageTitle";
import AddRecipeForm from "../Components/AddRecipeForm/AddRecipeForm";
import FollowUs from "Components/Footer/FollowUs/FollowUs";
import PopularRecipes from "Components/PopularRecipes/PopularRecipes";
import Container from "../Components/ui/Container/ContainerStyled";

import { useMediaQuery } from "@mui/material";

const AddRecipe = () => {
  const isMobile = useMediaQuery("(max-width: 1440px)");

  return (
    <Container>
      <MainPageTitle title={"Add recipe"} />

      <AddRecipeForm />

      {!isMobile && (
        <>
          <p>Follow Us</p>
          <FollowUs />
          <PopularRecipes />
        </>
      )}
    </Container>
  );
};

export default AddRecipe;
