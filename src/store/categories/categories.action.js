import CATEGORIES_ACTION_TYPES from './categories.types';
import { createAction } from '../../utils/reducer/reducers.utils';


export const setCategories = (categories) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);