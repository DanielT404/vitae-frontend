/*
    Any global constants required at the application level will be defined here.
*/

/* -------------     Constants below are used in ./getPathAPI.ts     ------------- */

// Define the dev local hostname resolution for the backend api - default as localhost (127.0.0.1)
const API_DEVELOPMENT_HOSTNAME = "localhost";
// Define the dev prefix of all backend API routes - default as "api" (could be "api/v2", "api/v3" for versioning, ect.)
const API_DEVELOPMENT_PATHNAME_PREFIX = "api";
// Define the dev backend api running port - default to 3000
const API_DEVELOPMENT_PORT = 3000;

/* Define the pathname corresponding to the backend API routes. Default values:
    1. GET /files - pathname is "files"
    2. GET /projects - pathname is "projects"
    3. POST /email - pathname is "email"
*/
const GET_FILES_API_ROUTE = "files";
const GET_PROJECTS_API_ROUTE = "projects";
const SEND_EMAIL_API_ROUTE = "email";

// **REQUIRED ON E2E Cypress testing API routing**: Define the backend service name
const DOCKER_BACKEND_SERVICE_NAME = "backend";

/* -------------     End constants ------------- /*

/*
    Visually DOM related constants. 
    1. SHOW_DEFAULT_PATH value is used in the /components/frame/header/index.tsx to append in the path box 
    the default path when someone visits the homepage - or root - ('/'). Defaults to "/about-me"
    2. YOUTUBE_VIDEO_IDENTIFIER is used in the /components/youtube-embed/index.tsx to embed a YouTube video in an iframe by its identifier.
    3. SMALL_VIEWPORT_BREAKPOINT is used in:
        - /components/file/minimized/index.tsx to show or hide a minimize overview
        - /components/frame/tree/index.tsx to show or hide the navigation elements
    ...depending on the current user screen width and value of breakpoint.
    This value has also been used in the components' media queries, hence we must sync the app logic with CSS.
    4. CV_URL is used in /routes/resume/index.tsx as a href to my latest, current CV. :-)
*/
const SHOW_DEFAULT_PATH = "/about-me";
const YOUTUBE_VIDEO_IDENTIFIER = "8aZL9wMhGH0";
const SMALL_VIEWPORT_BREAKPOINT = 1280;

const CV_URL = "https://cv-variants-bucket.s3.eu-central-1.amazonaws.com/Daniel-Florin-Damian_%C8%9Aun%C4%83_-_Backend_Developer.pdf";


export {
    API_DEVELOPMENT_HOSTNAME, API_DEVELOPMENT_PATHNAME_PREFIX, API_DEVELOPMENT_PORT,
    GET_FILES_API_ROUTE, GET_PROJECTS_API_ROUTE, SEND_EMAIL_API_ROUTE,
    DOCKER_BACKEND_SERVICE_NAME,
    SHOW_DEFAULT_PATH,
    YOUTUBE_VIDEO_IDENTIFIER, SMALL_VIEWPORT_BREAKPOINT,
    CV_URL
}