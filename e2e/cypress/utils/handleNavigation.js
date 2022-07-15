"use strict";
exports.__esModule = true;
exports.handleNavigation = void 0;
function handleNavigation(currentPath, type) {
    var availablePaths = [
        '/',
        '/desktop',
        '/about-me',
        '/projects',
        '/resume',
        '/contact'
    ];
    var ABOUT_ME_PATH_IDX = 2;
    var LAST_PATH_IDX = availablePaths.length - 1;
    var currentNavPath = function (path) { return path === currentPath; };
    var currentNavIdx = currentPath === '/' ? ABOUT_ME_PATH_IDX : availablePaths.findIndex(currentNavPath);
    if (type == 'back') {
        return currentNavIdx === 0 || currentPath === '/desktop' ? undefined : availablePaths[currentNavIdx - 1];
    }
    if (type == 'next') {
        return currentNavIdx === LAST_PATH_IDX ? undefined : availablePaths[currentNavIdx + 1];
    }
    return undefined;
}
exports.handleNavigation = handleNavigation;
