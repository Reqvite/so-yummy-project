import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import styled, { useTheme } from "styled-components";

const BoxStyled = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  background-color: ${(p) => p.theme.colors.mainBackground};
  border: 2px solid #000;
  border-radius: 8px;
  box-shadow: 24;
  padding: 10px;
`;

const LinkStyled = styled(Link)`
  color: ${(p) => p.theme.colors.darkText};

  transition: color linear 300ms;
  &:hover {
    color: ${(p) => p.theme.colors.accentColor};
    text-decoration: underline;
  }
`;

const TeamModal = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:767.9px)");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={handleOpen}
        sx={{
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: isMobile ? "10px" : "14px",
          lineHeight: 1,
          letteSpacing: -0.01,
          color: theme.colors.darkText,
          textTransform: "capitalize",
          "&:hover": { textDecoration: "underline" },
        }}
      >
        Tech Titans
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BoxStyled>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Development team
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <LinkStyled
              to="https://www.linkedin.com/in/vladyslav-yachyn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              1. Vladyslav Yachyn
            </LinkStyled>
            <br />
            <LinkStyled
              to="https://www.linkedin.com/in/uliya-dika/"
              target="_blank"
              rel="noopener noreferrer"
            >
              2. Uliya Dika
            </LinkStyled>
            <br />
            <LinkStyled
              to="https://www.linkedin.com/in/yurii-perekrestnyi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              3. Yurii Perekrestnyi
            </LinkStyled>
            <br />
            <LinkStyled
              to="https://www.linkedin.com/in/inna-bronnikova-53942a25b"
              target="_blank"
              rel="noopener noreferrer"
            >
              4. Inna Bronnikova
            </LinkStyled>
            <br />
            <LinkStyled
              to="https://www.linkedin.com/in/viktor-pozhydaiev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              5. Victor Pozhydaiev
            </LinkStyled>
            <br />
            <LinkStyled
              to="https://www.linkedin.com/in/samira-esmail-pur/"
              target="_blank"
              rel="noopener noreferrer"
            >
              6. Samira Esmailpur
            </LinkStyled>
            <br />
            <LinkStyled
              to="https://www.linkedin.com/in/tonya-shyva/"
              target="_blank"
              rel="noopener noreferrer"
            >
              7. Antonina Shyva
            </LinkStyled>
          </Typography>
        </BoxStyled>
      </Modal>
    </>
  );
};

export default TeamModal;
