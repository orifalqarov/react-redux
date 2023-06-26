import { createSlice } from "@reduxjs/toolkit";

const articleSlice = createSlice({
  name: "article",
  initialState: {
    isLoading: false,
    articles: [],
    error:null
  },
  reducers: {
    getArticleStart: (state) => {
      state.isLoading = true;
    },
    getArticlesSuccess: (state, action) => {
      state.articles = action.payload;
      state.isLoading = false;
    },
    getArticlesFailure:(state, action)=>{
        state.error=action.payload
    }
  },
});

export const { getArticleStart, getArticlesSuccess, getArticlesFailure } =
  articleSlice.actions;
export default articleSlice.reducer;
