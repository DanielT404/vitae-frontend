import { GET_FILES_API_ROUTE, GET_PROJECTS_API_ROUTE } from 'utils/global/constants';
import getPathAPI from '../global/getPathAPI';

async function get(type : typeof GET_FILES_API_ROUTE | typeof GET_PROJECTS_API_ROUTE) {
    const response = await fetch(getPathAPI(type));
    return await response.json();
}

export { get }

