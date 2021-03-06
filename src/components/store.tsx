import { configureStore } from '@reduxjs/toolkit';
import frameReducer from 'features/frame/frameSlice';
import fileReducer from 'features/file/fileSlice';
import highlightReducer from 'features/highlight/highlightSlice';
import captchaReducer from 'features/captcha/captchaSlice';
import contactFormReducer from 'features/contact-form/contactFormSlice';


const store = configureStore({
  reducer: {
    frame: frameReducer,
    file: fileReducer,
    highlight: highlightReducer,
    captcha: captchaReducer,
    contactForm: contactFormReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>

export default store