import { GET_FILES_API_ROUTE, GET_PROJECTS_API_ROUTE } from 'utils/global/constants';
import getPathAPI from '../global/getPathAPI';

async function get(type : typeof GET_FILES_API_ROUTE | typeof GET_PROJECTS_API_ROUTE) {
    try {
        getPathAPI(type);
    } catch (err) {
        throw new Error(`Couldn't get API path. Error message: \n \t${err}`);
    }
    const route = getPathAPI(type) as string;
    const response = await fetch(route);
    return await response.json();
}

export { get }

