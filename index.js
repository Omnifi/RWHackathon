var forever = require('forever-monitor'),
    chalk = require('chalk'),
    options = {
        'silent': false,
        'watch': false,
        'args': ['--color']
    }

var child = new(forever.Monitor)('bin/www', options)

child.on('watch:restart', function(info) {
    console.error(chalk.red('Forever: restaring because "' + info.stat + '" changed'));
});

child.on('restart', function() {
    console.error(chalk.red('Forever: restarting script for ' + child.times + ' time'));
});

child.on('exit:code', function(code) {
    if (code) console.error(chalk.red('Forever: detected script exited with code ' + code));
    console.error(chalk.red('Forever: detected script exit'));
});

child.start()
