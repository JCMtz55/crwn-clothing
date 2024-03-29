import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories 
)

export const selectCategoriesMap = createSelector(
  [selectCategoryReducer],
  (categories) => 
    categories.categories.reduce(
      (acc, { title, items }) => {
        acc[title.toLowerCase()] = items;
        return acc;
      },{})
)