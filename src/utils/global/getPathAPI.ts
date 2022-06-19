import { 
  API_PRODUCTION_HOSTNAME, API_PRODUCTION_PATHNAME_PREFIX,
  GET_FILES_API_ROUTE, GET_PROJECTS_API_ROUTE, SEND_EMAIL_API_ROUTE, 
} 
from "./constants";

function getPathAPI (
  route : typeof GET_FILES_API_ROUTE | typeof GET_PROJECTS_API_ROUTE | typeof SEND_EMAIL_API_ROUTE
) : string  {
  return `https://${API_PRODUCTION_HOSTNAME}/${API_PRODUCTION_PATHNAME_PREFIX}/${route}`;
}

export default getPathAPI;
