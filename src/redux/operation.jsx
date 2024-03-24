import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL =
  'https://65f9f5cd3909a9a65b19b6cb.mockapi.io/adverts/advert';

export const getAllCumpers = createAsyncThunk(
  'cumpers',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(); // Відправка GET-запиту на мокований API
      //         setAdverts(response.data); // Зберегти отримані дані у стані
      return response.data;
    } catch (error) {
      toast.error('Error getting cumpers');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
