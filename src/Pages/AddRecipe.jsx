import MainPageTitle from "../Components/ui/MainPageTitle/MainPageTitle";
import AddRecipeForm from "../Components/AddRecipeForm/AddRecipeForm";
import FollowUs from "Components/Footer/FollowUs/FollowUs";
import Container from "../Components/ui/Container/ContainerStyled";

import { useMediaQuery } from "@mui/material";
import PopularList from "Components/ui/PopularList/PopularList";

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
          <PopularList />
        </>
      )}
    </Container>
  );
};

export default AddRecipe;
