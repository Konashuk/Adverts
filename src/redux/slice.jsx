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
    formDate: '',

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
    setFormData(state, action) {
      state.formDate = action.payload;
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
      });
  },
});

export const exercisesReducer = exercisesSlise.reducer;
export const { setModal, setCumper, setSelectedItemm, setFormData } =
  exercisesSlise.actions;
