/*
    Any global constants required at the application level will be defined here.
*/

/* -------------     Constants below are used in ./getPathAPI.ts     ------------- */

// Define the production-ready API hostname
const API_PRODUCTION_HOSTNAME = "idratherprogram.com"
// Define the production-ready API routes prefix
const API_PRODUCTION_PATHNAME_PREFIX = "api";

/* Define the pathname corresponding to the backend API routes. Default values:
    1. GET /files - pathname is "files"
    2. GET /projects - pathname is "projects"
    3. POST /email - pathname is "sendEmail"
*/
const GET_FILES_API_ROUTE = "files";
const GET_PROJECTS_API_ROUTE = "projects";
const SEND_EMAIL_API_ROUTE = "email";

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

const CV_URL = "https://cv-variants-bucket.s3.eu-central-1.amazonaws.com/Daniel-Florin-Damian_Tuna_-_Junior_Software_Developer-1.pdf";

export { 
    API_PRODUCTION_HOSTNAME, API_PRODUCTION_PATHNAME_PREFIX,
    GET_FILES_API_ROUTE, GET_PROJECTS_API_ROUTE, SEND_EMAIL_API_ROUTE,
    SHOW_DEFAULT_PATH,
    YOUTUBE_VIDEO_IDENTIFIER, SMALL_VIEWPORT_BREAKPOINT, 
    CV_URL
}