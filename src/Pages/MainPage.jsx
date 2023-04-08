import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "redux/mainRecipes/operations";
import { selectItems } from "redux/mainRecipes/selectors";
import ChooseYourBreakfast from "../Components/ChooseYourBreakfast/ChooseYourBreakfast";
import { useMediaQuery } from "@mui/material";
import Search from "Components/Search/Search";
import PreviewCategories from "Components/PreviewCategories/PreviewCategories";

const MainPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  const matches = useMediaQuery("(max-width:767px)");
  return (
    <>
      <ChooseYourBreakfast />
      {matches && <Search />}
      <PreviewCategories items={items} />
    </>
  );
};

export default MainPage;
