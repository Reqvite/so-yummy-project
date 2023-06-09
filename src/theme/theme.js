export const lightTheme = {
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
    opacityText: "rgba(0,0,0,0.5)", //чорний з опасіті 0,5(текст у селекторах, на 404page)
    categoryText: "#BDBDBD", //світло-сірий(назви категорій)

    accentColor: "#8BAA36", //темно-зелений
    inputErrorColor: "#E74A3B",
    inputNotSecureColor: "#F6C23E",
    inputSuccessColor: "#3CBC81",

    categoryTabTextColor: "#BDBDBD",
    notFoundTitle: "#000000",
    notFoundText: "#7E7E7E",
    recipeDescriptionText: "#23262A",
    recipePreparationTextColor: "rgba(0, 0, 0, 0.8)",
    recipeHeaderTextColor: "#22252A",
    footerHoverColor: "#8BAA36",
    footerButtonBg: "#8BAA36",
    footerButtonHover: "#22252A",
    addButton: "#22252A",
    addButtonHover: "#8BAA36",

    themeButtonBg: "#efefef",
    cardBackGround: "#FFFFFF",
    deleteButtonBgFavorite: "#EBF3D4",
    deleteButtonBgMyRecipes: "#8BAA36",
    buttonBg: "#22252A",
    mainPageButton: "#22252A",
    paginationActive: "#EBF3D4",
    otherCategoriesButton: "#FAFAFA",

    userNameColor: "#22252A",
    mainIconColor: "#22252A",
    secondaryIconColor: "#FAFAFA",
    burgerMenuIconColor: "#22252A",
    socialIconColor: "#8BAA36",
    socialIconHover: "#FFFFFF",
    socialIconHoverAdd: "#1E1F28",
    containerBlockIcon: "#22252A",
    hoverButtondarkTheme: "#81B733",
    hoverPaginator: "#8BAA36",
    otherCategoriesHover: "#8BAA36",
    dropDownInput: "#ECECEC",
    dropDownBg: "#FFFFFF",
    dropDownText: "rgba(0,0,0,0.5)",
    activeItemDropDownList: "#8BAA36",

    addRecipeDropDownColor: "#FFFFFF",
    addRecipeMinusIcon: "#333333",
    ingredientInputBg: "#d9d9d9",
    mainSearchBtnHover: "#8BAA36",
    followUsTitle: "#3e4462",
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
    shoppingListBorder: "1px solid #e0e0e0",
    addRecipeBorder: "1px solid rgba(51, 51, 51, 0.3)",
  },
  shadows: {
    paginationShadow: "0px 4px 4px rgba(135, 135, 135, 0.2)",
  },
  flexCentered: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  components: {},
};

export const darkTheme = {
  colors: {
    mainBackground: "#1E1F28",
    footerBackground: "#8BAA36",
    darkThemeBackground: "#1E1F28",
    secondaryBackground: "#2A2C36",
    elementsBackground: "#2A2C36",
    mainText: "#FAFAFA",
    darkText: "#FAFAFA",
    secondaryText: "#FAFAFA",
    titleText: "#FAFAFA",
    footerText: "#FAFAFA",
    cardsText: "#FAFAFA",
    opacityText: "#000000",
    categoryText: "#BDBDBD",

    accentColor: "#8BAA36",
    inputErrorColor: "#E74A3B",
    inputNotSecureColor: "#F6C23E",
    inputSuccessColor: "#3CBC81",

    categoryTabTextColor: "rgba(250, 250, 250, 0.6)",
    notFoundTitle: "#FAFAFA",
    notFoundText: "rgba(250, 250, 250, 0.6)",
    recipeDescriptionText: "#23262A",
    recipePreparationTextColor: "#FAFAFA",
    recipeHeaderTextColor: "#22252A",
    footerHoverColor: "#23262A",
    footerButtonBg: "#1E1F28",
    footerButtonHover: "#8BAA36",
    themeButtonBg: "#8BAA36",
    cardBackGround: "#2A2C36",
    deleteButtonBgFavorite: "#1E1F28",
    deleteButtonBgMyRecipes: "#1E1F28",
    buttonBg: "#22252A",
    mainPageButton: "#8BAA36",
    paginationActive: "#8BAA36",
    otherCategoriesButton: "#FAFAFA",

    userNameColor: "#8BAA36",
    mainIconColor: "#FAFAFA",
    secondaryIconColor: "#FAFAFA",
    burgerMenuIconColor: "#8BAA36",
    socialIconColor: "#FAFAFA",
    socialIconHover: " #1E1F28",
    socialIconHoverAdd: "#8BAA36",
    containerBlockIcon: "#FAFAFA",
    hoverButtondarkTheme: "#81B733",
    hoverPaginator: "rgba(250, 250, 250, 0.6)",
    otherCategoriesHover: "#8BAA36",
    dropDownInput: "#2A2C36",
    dropDownBg: "#8BAA36",
    dropDownText: "#8BAA36",
    activeItemDropDownList: "#FAFAFA",
    addButton: "#8BAA36",
    addButtonHover: "#22252A",

    addRecipeDropDownColor: "#8BAA36",
    addRecipeMinusIcon: "#ffffff",
    ingredientInputBg: "transparent",
    mainSearchBtnHover: "#22252A",
    followUsTitle: "#ffffff",
  },
  fontSizes: {
    xxxs: "10px",
    xxs: "12px",
    xs: "14px",
    s: "16px",
    sm: "18px",
    m: "24px",
    l: "28px",
    xl: "44px",
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
    shoppingListBorder: "1px solid rgba(250, 250, 250, 0.3)",
    addRecipeBorder: "1px solid #FAFAFA",
  },
  shadows: {
    paginationShadow: "0px 4px 4px rgba(31, 30, 30, 0.2)",
  },
  flexCentered: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  components: {},
};
