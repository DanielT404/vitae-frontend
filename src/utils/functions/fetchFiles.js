import getPathAPI from '../getPathAPI';

async function fetchFiles() {
  const response = await fetch(getPathAPI('files'));
  return await response.json();
}

export default fetchFiles;
