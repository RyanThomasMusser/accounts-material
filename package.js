Package.describe({
  name: 'std:custom-accounts-material',
  version: '1.1.0',
  summary: 'Material UI – Custom Accounts UI for React in Meteor 1.3',
  git: 'https://github.com/RyanThomasMusser/custom-accounts-material',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use('ecmascript');
  api.use('underscore');
  api.use('std:accounts-ui@1.2.1');

  api.mainModule('main.jsx');
});
