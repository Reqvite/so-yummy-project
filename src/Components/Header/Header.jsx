import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
import { useMediaQuery } from "@mui/material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../ui/Container/ContainerStyled";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div>
      Header
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default Header;
