Package.describe({
  summary: "Twitter API wrapper using OAuth1Binding of Meteor Twitter Service",
  version: "1.0.1",
  git: "https://github.com/acemtp/meteor-twitter-api.git",
  name: "acemtp:twitter-api"
});

Package.on_use(function (api, where) {
  api.versionsFrom("METEOR@0.9.0");
  api.use('accounts-twitter', 'server');
  api.use('oauth1', 'server');

  api.add_files('lib/twitter.js', 'server');

  api.export('TwitterApi', 'server');
});
