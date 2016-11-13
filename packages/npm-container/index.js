import { Meteor } from 'meteor/meteor';

Meteor.npmRequire = function (moduleName) {
  const module = Npm.require(moduleName);
  return module;
};

Meteor.require = function (moduleName) {
  // eslint-disable-next-line no-console
  console.warn('Meteor.require is deprecated. Please use Meteor.npmRequire instead!');
  return Meteor.npmRequire(moduleName);
};
