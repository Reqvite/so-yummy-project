import ChooseYourBreakfast from "../Components/ChooseYourBreakfast/ChooseYourBreakfast";
import { useMediaQuery } from "@mui/material";

import Search from "Components/Search/Search";

const MainPage = () => {
  const matches = useMediaQuery("(max-width:767px)");
  return (
    <>
      <ChooseYourBreakfast />
      {matches && <Search />}
    </>
  );
};

export default MainPage;
