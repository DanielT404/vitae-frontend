import { createSlice } from '@reduxjs/toolkit';

export const contactFormSlice = createSlice({
  name: 'contactForm',
  initialState: {
    name: '',
    email: '',
    message: '',
    response: { success: false, message: '' }
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload.name;
    },
    setEmail: (state, action) => {
      state.email = action.payload.email;
    },
    setMessage: (state, action) => {
      state.message = action.payload.message;
    },
    setResponse: (state, action) => {
      state.response = { ...action.payload };
    }
  }
});

export const { setName, setEmail, setMessage, setResponse } =
  contactFormSlice.actions;
export default contactFormSlice.reducer;
