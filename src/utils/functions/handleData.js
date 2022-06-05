import getPathAPI from '../getPathAPI';

async function get(type) {
    const response = await fetch(getPathAPI(type));
    return await response.json();
}

export { get }

