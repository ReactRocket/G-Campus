import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sessionID: null,
  sessionType: null,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setSession: (state, action) => {
      const { sessionID, sessionType } = action.payload;
      state.sessionID = sessionID;
      state.sessionType = sessionType;
    },
    clearSession: (state) => {
      state.sessionID = null;
      state.sessionType = null;
    },
  },
});

export const { setSession, clearSession } = sessionSlice.actions;
export default sessionSlice.reducer;
