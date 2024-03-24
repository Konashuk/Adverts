import { createSelector } from '@reduxjs/toolkit';

export const selectModal = state => state.advert.isOpenModal;
export const selectCumpers = state => state.advert.cumpers;
export const selectName = state => state.advert.selectedName;
export const selectSelectedCumper = state => state.advert.SelectedCumper;

// old data

export const selectIsLoading = state => state.exercises.isLoading;

export const selectAllCategory = state => state.exercises.category;

export const selectFilters = state => state.exercises.filters;

export const selectSelectedCategories = state =>
  state.exercises.selectedCategories;

export const selectUrlParams = state => state.exercises.urlParams;

export const selectFilteredCategory = state => state.exercises.filteredCategory;

export const selectTimer = state => state.exercises.timer;

export const selectPassTime = state => state.exercises.passTime;

export const selectIsPlayed = state => state.exercises.isPlayed;

export const selectSelectedItem = state => state.exercises.selectedItem;

export const selectCalories = state => state.exercises.calories;

export const selectSucssesModal = state => state.exercises.isOpenSucssesModal;

export const selectedName = createSelector(
  [selectCumpers, selectName],
  (cumpers, selectedName) => {
    if (!cumpers || cumpers.length === 0) {
      return [];
    }
    return cumpers.filter(item =>
      item.name.toLowerCase().includes(selectedName.toLowerCase())
    );
  }
);

// export const selectedCumper = createSelector(
//   [selectCumpers, selectIdCumper],
//   (category, filters) => {
//     if (!category || category.length === 0) {
//       return [];
//     }
//     return category.filter(item =>
//       item.filter.toLowerCase().includes(filters.toLowerCase())
//     );
//   }
// );
