import { createSelector } from '@reduxjs/toolkit';

export const selectModal = state => state.advert.isOpenModal;
export const selectCumpers = state => state.advert.cumpers;
export const selectName = state => state.advert.selectedName;
export const selectSelectedCumper = state => state.advert.SelectedCumper;
export const selectFormDate = state => state.advert.formDate;

export const selectSelectedName = createSelector(
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
