async function fetchFiles() {
    const url =
        process.env.NODE_ENV === 'development' ||
        process.env.NODE_ENV === 'test'
            ? 'http://localhost:3000/files'
            : 'https://idratherprogram.com/api/files'
    const response = await fetch(url)
    return await response.json()
}

export default fetchFiles
