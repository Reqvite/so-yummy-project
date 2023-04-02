export const theme = {
  colors: {
    mainBackground: "#FAFAFA", //білий background
    footerBackground: "#22252A", //темний(чорний) для футера, кнопок-посилань,ім'я юзера
    darkThemeBackground: "#1E1F28", //чорний
    secondaryBackground: "#EBF3D4", //світло-зелений
    elementsBackground: "#FFFFFF", // чистий білий в елементах карток, селекторів
    mainText: "#23262A",
    darkText: "#22252A",
    secondaryText: "#FAFAFA",
    titleText: "#001833", // заголовки h1
    footerText: "#FAFAFA", //білий
    cardsText: "#3E4462", //назви страв та надписи на картках
    opacityText: "#000000", //чорний з опасіті 0,5(текст у селекторах, на 404page)
    categoryText: "#BDBDBD", //світло-сірий(назви категорій)

    accentColor: "#8BAA36", //темно-зелений
    inputErrorColor: "#E74A3B",
    inputNotSecureColor: "#F6C23E",
    inputSuccessColor: "#3CBC81",
  },
  fontSizes: {
    xxxs: "10px", //footer-mobile-input
    xxs: "12px", //mobile-selectors
    xs: "14px", //footer
    s: "16px", //footer
    sm: "18px", //footer
    m: "24px", // mobile-header
    l: "28px", //footer, h1-tablet
    xl: "44px", //h1-desktop,
  },
  space: {},
  sizes: {
    mobile: "@media screen and (min-width:374.98px)",
    tablet: "@media screen and (min-width:767.98px)",
    desktop: "@media screen and (min-width:1439.98px)",
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  lineHeights: {},
  letterSpacings: {
    base: "-0.02em",
    mainHeading: "-0.005em",
  },
  borders: {
    secondaryButtonBorder: "2px solid #FAFAFA",
  },
  shadows: {},
  flexCentered: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  components: {},
};
