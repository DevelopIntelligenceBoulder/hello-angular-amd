/**
 * Configuration allowing RequireJS to understand the application
 *   architecture.
 */
requirejs.config({
    //Location of the RequireJS file
    "baseUrl": "js/lib",
    //Setting up any special paths within the architecture
    paths: {
        //Location of the application JavaScript in reference
        //  to the baseUrl
        "app": "../app",
        "angular": "angular"
    },
    shim: {
        angular: {
            exports: "angular"
        }
    },
    deps: ["app"]
});

/**
 * Only call to requirejs bootstraps the initial module and depenedency tree.
 *   i.e. the Application Controller
 */
requirejs(["app/main"]);