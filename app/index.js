'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

/**
 * Port of https://github.com/RichardBray/color-me-sass
 */
var ColormeGenerator = module.exports = function ColormeGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    // this.installDependencies({ skipInstall: options['skip-install'] });
    var guide = 'Colors Installed! '.yellow.bold +
    '\nYou should now place something like the following in your _base.scss or similar:'.blue.bold +
    '\n@import "colors/reds";' +
    '\n@import "colors/peaches";' +
    '\n@import "colors/tans";' +
    '\n@import "colors/oranges";' +
    '\n@import "colors/ambers";' +
    '\n@import "colors/yellows";' +
    '\n@import "colors/limes";' +
    '\n@import "colors/greens";' +
    '\n@import "colors/turquoise";' +
    '\n@import "colors/blues";' +
    '\n@import "colors/purples";' +
    '\n@import "colors/pinks";' +
    '\n@import "colors/browns";' +
    '\n@import "colors/whites";' +
    '\n@import "colors/grays";' +
    '\n@import "colors/bootstrap";\n';
    console.log(guide);
    console.log('But please do remove any extra @imports once you have determined color scheme!'.blue);
  });
  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(ColormeGenerator, yeoman.generators.Base);

ColormeGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // welcome message
  var welcome =
  '\n     _-----_' +
  '\n    |       |' +
  '\n    |' + '--(o)--'.red + '|   .--------------------------.' +
  '\n   `---------´  |    ' + 'Welcome to Yeoman,'.yellow.bold + '    |' +
  '\n    ' + '( '.yellow + '_' + '´U`'.yellow + '_' + ' )'.yellow + '   |   ' + 'ladies and gentlemen!'.yellow.bold + '  |' +
  '\n    /___A___\\   \'__________________________\'' +
  '\n     |  ~  |'.yellow +
  '\n   __' + '\'.___.\''.yellow + '__' +
  '\n ´   ' + '`  |'.red + '° ' + '´ Y'.red + ' `\n';

  console.log(welcome);

  var prompts = [{
    name: 'destPath',
    message: 'Where would you like me to put the color-me-sass files?',
    default: 'css/colors',
  }];

  this.prompt(prompts, function (err, props) {
    if (err) {
      return this.emit('error', err);
    }
    this.directory('colors', props.destPath);
    cb();
  }.bind(this));
};
