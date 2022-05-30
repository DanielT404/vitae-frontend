/* 
   CSPHelper.isCSPEnabled determines whether to append <meta> tag containing CSPHelper.policies inside <head> tag 
   of bundled index.html or not.
*/
const CSPHelper = {
  isCSPEnabled: true,
  policies: `
      {YOUR_OWN_CSP_POLICIES_HERE}
    `
};

/* 
   Set Critters preloading strategy. 
   To be compliant with CSP, we must avoid media resource preload and removal using JavaScript inline scripts.
   Read more about this in their docs: https://github.com/GoogleChromeLabs/critters#preloadstrategy
*/
function setPreloadingStrategy(config, helpers) {
  const { plugin } = helpers.getPluginsByName(config, 'Critters')[0] || {};
  if (plugin) {
    plugin.options.preload = CSPHelper.isCSPEnabled ? 'default' : 'media';
  }
}

/*
   Define application level environment keys at build time.
   Useful in order to avoid exposing sensitive keys in the code source and reference them in code using {process.env.ENV_VARIABLE} instead.
*/
function setEnvKeys(config, helpers) {
  const { plugin } = helpers.getPluginsByName(config, 'DefinePlugin')[0] || {};
  plugin.definitions['process.env.GOOGLE_RECAPTCHA_SITE_KEY'] = JSON.stringify(
    '{YOUR_OWN_SITE_KEY}'
  );
  plugin.definitions['process.env.GOOGLE_RECAPTCHA_SECRET_KEY'] =
    JSON.stringify('{YOUR_OWN_SECRET_KEY}');
}

/*
   Set your own application title.
   If CSPHelper.isCSPEnabled is true, we append additional csp option.
   Properties set within the options are available to dynamically placehold values inside /src/template.html
*/
function extendHtmlConfig(config, helpers) {
  const { plugin } =
    helpers.getPluginsByName(config, 'HtmlWebpackPlugin')[0] || {};
  if (plugin) {
    plugin.options.title = '{YOUR_OWN_TITLE}';
    if (CSPHelper.isCSPEnabled) {
      if (env.isProd) {
        plugin.options.csp = CSPHelper.policies.trim();
      }
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
  setEnvKeys(config, helpers);
  extendHtmlConfig(config, helpers);
  setImportPathsRelativeToSrcFolder(config, env);
};
