/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-model-based-sidebars',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    contentSecurityPolicy: {
        'script-src': "'self' ajax.googleapis.com cdn.rawgit.com",
        'style-src': "'self' cdn.rawgit.com"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.contentSecurityPolicy = {
      'connect-src': "'self' http://localhost:3000"
    }

    ENV.ApiUrl = 'http://localhost:3000';
    ENV.ApiPrefix = 'api';

    ENV['ember-cli-mirage'] = {
      enabled: false
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';

    ENV.ApiUrl = '';
    ENV.ApiPrefix = '';
  }

  if (environment === 'production') {
    ENV.contentSecurityPolicy = {
      'connect-src': "'self' http://localhost:3000"
    }
    ENV.ApiUrl = 'http://localhost:3000';
    ENV.ApiPrefix = 'api';
  }

  return ENV;
};
