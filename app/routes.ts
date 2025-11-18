import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
    // Home page - displays resume list and application tracking
    index("routes/home.tsx"),
    
    // Authentication page - handles user login/logout via Puter
    route('/auth', 'routes/auth.tsx'),
] satisfies RouteConfig;
