import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const loadWatchlist = () => {
  try {
    const data = localStorage.getItem("watchlist");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    return [];
  }
};

const saveWatchlist = (items) => {
  localStorage.setItem("watchlist", JSON.stringify(items));
};

const initialState = {
  items: loadWatchlist(),
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addToWatchlist: (state, action) => {
      const ex = state.items.find(
        (item) => item.Title === action.payload.movieName
      );

      if (!ex) {
        state.items.push(action.payload.data);
        saveWatchlist(state.items);
        toast.success("Added to watchlist");
      } else {
        toast.error("Already added");
      }
    },

    removeFromWatchlist: (state, action) => {
      state.items = state.items.filter(
        (item) => item.imdbID !== action.payload
      );
      saveWatchlist(state.items);
      toast.success("Removed from watchlist");
    },

    clearWatchlist: (state) => {
      state.items = [];
      saveWatchlist(state.items);
      toast.success("Watchlist cleared");
    },
  },
});

export const {
  addToWatchlist,
  removeFromWatchlist,
  clearWatchlist,
} = watchlistSlice.actions;

export default watchlistSlice.reducer;