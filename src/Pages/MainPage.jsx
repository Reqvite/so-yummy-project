import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "redux/mainRecipes/operations";
import { selectItems, selectIsLoadind } from "redux/mainRecipes/selectors";
import ChooseYourBreakfast from "../Components/ChooseYourBreakfast/ChooseYourBreakfast";
import { useMediaQuery } from "@mui/material";
import Search from "Components/Search/Search";
import PreviewCategories from "Components/PreviewCategories/PreviewCategories";
import PreviewCategoriesSkeleton from "../Components/ui/Skeletons/PreviewCategoriesSkeleton";

const MainPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const isLoading = useSelector(selectIsLoadind);

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  const matches = useMediaQuery("(max-width:767px)");
  return (
    <>
      <ChooseYourBreakfast />
      {matches && <Search />}
      {isLoading ? (
        <PreviewCategoriesSkeleton />
      ) : (
        <PreviewCategories items={items} />
      )}
    </>
  );
};

export default MainPage;
