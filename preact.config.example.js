/* 
   CSPHelper.isCSPEnabled determines whether to append <meta> tag containing CSPHelper.policies inside <head> tag 
   of bundled index.html or not.
*/
const CSPHelper = {
    isCSPEnabled: true,
    policies: `{YOUR OWN CSP POLICIES}`
};

/* 
   Set Critters preloading strategy. 
   To be compliant with CSP, we must avoid media resource preload and removal of JavaScript inline scripts.
   Read more about this in their docs: https://github.com/GoogleChromeLabs/critters#preloadstrategy
*/
function setPreloadingStrategy(config, helpers) {
    const { plugin } = helpers.getPluginsByName(config, 'Critters')[0] || {};
    if (plugin) {
        plugin.options.preload = CSPHelper.isCSPEnabled ? 'default' : 'media';
        plugin.options.external = false;
    }
}

/*
   Define application level environment keys at build time.
   Useful in order to avoid exposing sensitive keys in the code source and reference them in code using {process.env.ENV_VARIABLE} instead.
*/
function setEnvKeys(config, helpers) {
    const { plugin } = helpers.getPluginsByName(config, 'DefinePlugin')[0] || {};
    plugin.definitions['process.env.GOOGLE_RECAPTCHA_SITE_KEY'] =
        JSON.stringify({ YOUR_OWN_SITE_KEY });
    plugin.definitions['process.env.GOOGLE_RECAPTCHA_SECRET_KEY'] =
        JSON.stringify({ YOUR_OWN_SECRET_KEY });
}

/*
    Support of setting environment variables using .env file.
*/
function supportEnvFile(config) {
    const Dotenv = require('dotenv-webpack');
    config.plugins.push(new Dotenv({ path: './.env' }));
}


/*
   Set your own application title.
   If CSPHelper.isCSPEnabled is true, we append additional CSP policies set within `CSPHelper.policies` property.
   Policies will be dynamically inserted at build time inside /src/template.html.
   Read more about Content-Security-Policy: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
*/
function extendHtmlConfig(config, helpers, env) {
    const { plugin } =
        helpers.getPluginsByName(config, 'HtmlWebpackPlugin')[0] || {};
    if (plugin) {
        plugin.options.title = "Daniel Țună's space";
        if (CSPHelper.isCSPEnabled) {
            plugin.options.csp = CSPHelper.policies.trim();
        }
    }
}

/*
   Resolve import paths to be relative to the src folder.
   Useful in order to avoid multi-relative path imports inside code. (e.g. import module from '../../../../x')
*/
function setImportPathsRelativeToSrcFolder(config, env) {
    config.resolve.modules.push(env.src);
}

/*
  Don't append random hash value to CSS classes.
  Useful in order to make life easier with Cypress, E2E testing and selecting DOM elements by class :-)
*/
function removeHashFromCssClasses(config, helpers) {
    const { loader } = helpers.getLoadersByName(config, 'css-loader')[0] || {};
    if (loader) {
        loader.options.modules.localIdentName = '[local]';
    }
}

/**
 * Function that mutates the original webpack config.
 * Supports asynchronous changes when a promise is returned (or it's an async function).
 *
 * @param {import('preact-cli').Config} config - original webpack config
 * @param {import('preact-cli').Env} env - current environment and options pass to the CLI
 * @param {import('preact-cli').Helpers} helpers - object with useful helpers for working with the webpack config
 * @param {Record<string, unknown>} options - this is mainly relevant for plugins (will always be empty in the config), default to an empty object
 */
export default (config, env, helpers, options) => {
    setPreloadingStrategy(config, helpers);
    supportEnvFile(config, helpers);
    setEnvKeys(config, helpers);
    extendHtmlConfig(config, helpers, env);
    setImportPathsRelativeToSrcFolder(config, env);
    removeHashFromCssClasses(config, helpers);
    if (config.performance) {
        config.performance.maxEntrypointSize = 512000;
        config.performance.maxAssetSize = 512000;
    }
    config.externals = { ...config.externals, canvas: 'pdf.js' };
};

