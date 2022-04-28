function handleNavigation(currentPath, type) {
    const availablePaths = [
        '/',
        '/desktop',
        '/about-me',
        '/projects',
        '/resume',
        '/contact',
    ]
    const currentNav = (path) => path === currentPath
    let currentNavIdx = availablePaths.findIndex(currentNav)

    if (currentPath === '/') {
        currentNavIdx = 2
    }

    if (currentNavIdx == 0 && type == 'back') return -1
    if (currentNavIdx == availablePaths.length - 1 && type == 'next') return -1
    if (currentPath == '/desktop' && type == 'back') return -1

    if (type == 'next') return availablePaths[currentNavIdx + 1]
    if (type == 'back') return availablePaths[currentNavIdx - 1]
}

export default handleNavigation
