Package.describe({
  name: 'mdg:animations',
  version: '0.2.0',
  summary: 'A set of defined, reusable animations for velocity',
  git: 'https://github.com/meteor/chromatic',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use([
    'tmeasday:check-npm-versions@0.3.1',
    'ecmascript',
    'jquery',
    'underscore',
    'modules']);

  api.mainModule('main.js', 'client');
});
