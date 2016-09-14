var mongoose = require('mongoose'),
    chalk = require('chalk')

module.exports = function() {

    var db = process.env.MONGOHQ_URL

    mongoose.connect(db, {
        mongos: {
            ssl: false,
            sslValidate: false
        }
    })

    mongoose.connection.on('connected', function() {
        console.log(chalk.yellow('Mongoose connection open to ' + db))
    })

    mongoose.connection.on('error', function(err) {
        console.error(chalk.red('Mongoose connection error: ' + db + err))
        console.error(chalk.red('Have you started Mongo?'))
    })

    mongoose.connection.on('disconnected', function() {
        console.error(chalk.red('Mongoose connection disconnected'))
    })

    process.on('SIGINT', function() {
        mongoose.connection.close(function() {
            console.log(chalk.red('Mongoose connection disconnected through app termination'))
            process.exit(0)
        })
    })

    return mongoose.connection
}
