import { createSlice } from '@reduxjs/toolkit';
import { getAllCumpers } from './operation';

export const exercisesSlise = createSlice({
  name: 'advert',
  initialState: {
    isLoading: false,
    isOpenModal: false,
    selectedName: '',
    SelectedCumper: [],
    cumpers: [],

    category: [],
    filters: 'Body parts',
    selectedCategories: '',
    filteredCategory: '',
    urlParams: 'bodyPart',

    timer: '',
    passTime: 180,
    isPlayed: false,
    selectedItem: null,
    calories: null,

    isOpenSucssesModal: false,
    error: null,
  },
  reducers: {
    setModal(state, action) {
      state.isOpenModal = action.payload;
    },
    setCumper(state, action) {
      state.selectedName = action.payload;
    },
    setSelectedItem(state, action) {
      state.selectedItem = action.payload;
    },
    //old data

    setFilter(state, action) {
      state.filters = action.payload;
    },

    setFilteredCategory(state, action) {
      state.filteredCategory = action.payload;
    },
    setUrlParams(state, action) {
      state.urlParams = action.payload;
    },

    setTimer(state, action) {
      state.timer = action.payload;
    },
    setPassTime(state, action) {
      state.passTime = action.payload;
    },
    setIsPlayed(state, action) {
      state.isPlayed = action.payload;
    },

    setCalories(state, action) {
      state.calories = action.payload;
    },

    setSucssesModal(state, action) {
      state.isOpenSucssesModal = action.payload;
    },
  },
  extraReducers: builder => {
    builder //cumpers
      .addCase(getAllCumpers.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(getAllCumpers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cumpers = action.payload;
      })
      .addCase(getAllCumpers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }); //exercises/filters
    //   .addCase(getFilterExercises.pending, (state, action) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(getFilterExercises.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.category = action.payload;
    //   })
    //   .addCase(getFilterExercises.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //   })
    //   .addCase(addExerciseToDiary.pending, state => {
    //     state.isLoading = true;
    //     state.isOpenFormModal = true;
    //     state.isOpenSucssesModal = false;
    //   })
    //   .addCase(addExerciseToDiary.fulfilled, state => {
    //     state.isLoading = false;
    //     state.error = null;
    //     state.isOpenFormModal = false;
    //     state.isOpenSucssesModal = true;
    //   })
    //   .addCase(addExerciseToDiary.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //     state.isOpenFormModal = true;
    //     state.isOpenSucssesModal = false;
    //   });
  },
});

export const exercisesReducer = exercisesSlise.reducer;
export const {
  setModal,
  setCumper,
  setSelectedItem,
  //old data
  setFilter,
  setFilteredCategory,
  setUrlParams,
  setTimer,
  setIsPlayed,
  setCalories,
  setSelectedId,
  setSucssesModal,
  setPassTime,
} = exercisesSlise.actions;
