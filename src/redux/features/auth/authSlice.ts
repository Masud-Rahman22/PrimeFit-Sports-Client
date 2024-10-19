import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { REHYDRATE } from 'redux-persist';

// Define your user type
export type TUser = {
  userId: string;
  picture: string;
  iat: number;
  exp: number;
};

type TAuthState = {
  user: null | TUser;
  token: null | string;
};

// Initial state
const initialState: TAuthState = {
  user: null,
  token: null,
};

// Custom REHYDRATE action type
type RehydrateAction = {
  type: typeof REHYDRATE;
  payload?: RootState; // Optional payload of RootState type
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ user: TUser; token: string }>) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(REHYDRATE, (state, action: RehydrateAction) => {
      if (action.payload?.auth) {
        state.user = action.payload.auth.user;
        state.token = action.payload.auth.token;
      }
    });
  },
});

export const { setUser, logout, getUser } = authSlice.actions;
export default authSlice.reducer;

export const useCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState) => state.auth.user;
