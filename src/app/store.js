import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../features/auth/authSlice"
import watchlistReducer from "../features/watchlist/watchlistSlice"
export default configureStore({
  reducer: {
   auth:authReducer,
   watchList:watchlistReducer
  },
})

