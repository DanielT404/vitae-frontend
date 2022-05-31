export const mockStore = {
  frame: {
    value: true,
    isNavTreeShown: false
  },
  file: {
    viewFileMode: false,
    fileInfo: {},
    files: [],
    minimizedFiles: []
  },
  captcha: {
    token: null,
    hasSubmitted: false
  },
  contactForm: {
    name: '',
    email: '',
    message: '',
    response: { success: false, message: '' }
  },
  highlight: {
    isActive: false,
    searchText: ''
  }
};
