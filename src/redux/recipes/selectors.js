export const selectRecipe = (state) => state.recipes.recipe;
export const selectIsLoading = (state) => state.recipes.isLoading;
export const selectRecipeLoading = (state) => state.recipes.recipeIsLoading;
export const selectUserFavouritesRecipes = (state) =>
  state.recipes.userFavouritesRecipes;
export const selectPopularRecipes = (state) => state.recipes.popularRecipes;
export const selectUserFavoritesIsLoading = (state) =>
  state.recipes.userFavoritesIsLoading;
export const selectPopularIsLoading = (state) => state.recipes.popularIsLoading;
export const selectPagination = (state) => state.recipes.pagination;
