function getPathAPI(route, port = 3000) {
  return process.env.NODE_ENV === 'development' ||
    process.env.NODE_ENV === 'test'
    ? `http://localhost:${port}/api/${route}`
    : `https://idratherprogram.com/api/${route}`;
}

export default getPathAPI;
