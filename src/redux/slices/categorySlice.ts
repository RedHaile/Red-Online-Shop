import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ALL_CATEGORY_ID } from '../../misc/constants'
import { Category } from '../../misc/type'
import { categoryEndpoints } from '../../config/config'
import { fetchData } from '../../utils/fetchData'

const realUrl = categoryEndpoints.categories

type InitialState = {
  categories: Category[]
  selectedCategory: string
  loading: boolean
  error: string | null
}

const initialState: InitialState = {
  categories: [],
  selectedCategory: ALL_CATEGORY_ID,
  loading: false,
  error: null
}

export const fetchCategoriesAsync = createAsyncThunk('fetchCategoriesAsync', async () => {
  return fetchData<Category[]>(realUrl)
})

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setSelectedCategory(state, action: PayloadAction<string>) {
      state.selectedCategory = action.payload
    }
  },
  extraReducers(builder) {
    // fetchCategoriesAsync
    builder.addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
      if (!(action.payload instanceof Error)) {
        state.categories = action.payload
      }
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchCategoriesAsync.pending, (state) => {
      //return {...
      state.loading = true;
        state.error = null;
     // }
    });
    builder.addCase(fetchCategoriesAsync.rejected, (state, action) => {
     /* return {
        ...state,
        loading: false,
        error: action.error.message ?? 'error'
      }*/
      state.loading = false;
      state.error = action.error.message ?? 'error';
    });
  }
})

export const { setSelectedCategory } = categorySlice.actions

export default categorySlice.reducer