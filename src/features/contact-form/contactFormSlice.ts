import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type DefaultResponse = { success: boolean, message: string } 
type ResponseOnSuccess = { messageId?: string }
type Response = DefaultResponse & ResponseOnSuccess

type ContactFormState = { name: string, email: string, message: string, response: Response }

const initialState: ContactFormState = { 
  name: '', 
  email: '', 
  message: '', 
  response: { 
    success: false, 
    message: '',
    messageId: undefined
  } 
}

export const contactFormSlice = createSlice({
  name: 'contactForm',
  initialState: initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    setResponse: (state, action: PayloadAction<Response>) => {
      state.response = action.payload;
    }
  }
});

export const { setName, setEmail, setMessage, setResponse } =
  contactFormSlice.actions;
export default contactFormSlice.reducer;
