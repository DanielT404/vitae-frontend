import {
  API_DEVELOPMENT_HOSTNAME, API_DEVELOPMENT_PATHNAME_PREFIX, API_DEVELOPMENT_PORT,
  DOCKER_BACKEND_SERVICE_NAME,
  GET_FILES_API_ROUTE, GET_PROJECTS_API_ROUTE, SEND_EMAIL_API_ROUTE,
}
  from "./constants";

function getPathAPI(
  route: typeof GET_FILES_API_ROUTE | typeof GET_PROJECTS_API_ROUTE | typeof SEND_EMAIL_API_ROUTE
): string | Error {
  if (process.env.PREACT_APP_MODE === 'local') {
    return `http://${API_DEVELOPMENT_HOSTNAME}:${API_DEVELOPMENT_PORT}/${API_DEVELOPMENT_PATHNAME_PREFIX}/${route}`;
  }
  if (process.env.PREACT_APP_MODE === 'cypress-testing') {
    return `http://${DOCKER_BACKEND_SERVICE_NAME}:${API_DEVELOPMENT_PORT}/${API_DEVELOPMENT_PATHNAME_PREFIX}/${route}`;
  }
  throw new Error(`process.env.PREACT_APP_MODE accepts only 'local' or 'cypress-testing' values. Received ${process.env.PREACT_APP_MODE} instead.`);
}

export default getPathAPI;
