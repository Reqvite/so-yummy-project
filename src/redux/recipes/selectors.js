export const selectRecipe = (state) => state.recipes.recipe;
export const selectIsLoading = (state) => state.recipes.isLoading;
export const selectRecipeLoading = (state) => state.recipes.recipeIsLoading;
export const selectUserFavouritesRecipes = (state) =>
  state.recipes.userFavouritesRecipes;
