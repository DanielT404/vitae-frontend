function handleNavigation(currentPath: string, type: "back" | "next") : string | undefined {
  const availablePaths = [
    '/',
    '/desktop',
    '/about-me',
    '/projects',
    '/resume',
    '/contact'
  ];
  const ABOUT_ME_PATH_IDX = 2;
  const LAST_PATH_IDX = availablePaths.length - 1;
  let currentNavPath = (path: string) => path === currentPath;
  let currentNavIdx = currentPath === '/' ? ABOUT_ME_PATH_IDX : availablePaths.findIndex(currentNavPath);
  if (type == 'back') {
    return currentNavIdx === 0 || currentPath === '/desktop' ? undefined : availablePaths[currentNavIdx - 1];
  }
  if (type == 'next') {
    return currentNavIdx === LAST_PATH_IDX ? undefined : availablePaths[currentNavIdx + 1];
  }
  return undefined;
}

export { handleNavigation };
