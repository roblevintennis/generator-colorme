/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;
var fs = require('fs');

describe('colorme generator', function () {
  beforeEach(function (done) {
    console.log("IN beforeEach...");
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('colorme:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });
  // Remove all the _*.scss color files copied over
  afterEach(function (done) {
    // Merely using testDirectory results in removal of files:
    // https://github.com/yeoman/generator/blob/master/lib/test/helpers.js
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }
      done();
    }.bind(this));
  });

  it('generates expected files', function (cb) {
    var expected = ['_blues.scss', '_reds.scss'];
    helpers.mockPrompt(this.app, { destPath: '.' });
    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFiles(expected);
      cb();
    });
  });

});
