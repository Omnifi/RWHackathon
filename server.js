// Load in .env file (all remote settings must be in server environment variables)
require('dotenv').config({ silent: true })

// Require deps
var chalk = require('chalk'),
    ip = require("ip"),
    express = require('express'),
    exphbs = require('express-handlebars'),
    helpers = require('handlebars-helpers')(),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    package = require('./package.json'),
    database = require('./app/lib/database')(),
    session = require('express-session'),
    mongoStore = require('connect-mongo/es5')({
        session: session
    }),
    app = express()

// Interceptions
app.use(function(req, res, next) {

    res.header('Build', package.version)

    next()
})

// Set up
app.disable('x-powered-by')
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

//session
var sessionObj = {
    saveUninitialized: true,
    resave: true,
    secret: 'gambleyourmum',
    name: 'Basket Case Session'
}

if (process.env.MONGOHQ_URL) {
    // db
    sessionObj.cookie = {
        path: '/',
        httpOnly: false,
        secure: false,
        maxAge: 86400000 // one day
    }
    sessionObj.store = new mongoStore({
        url: process.env.MONGOHQ_URL
    })
}
// bootstrap session
app.use(session(sessionObj))

// Bootstrap variables
app.locals.environment = process.env.NODE_ENV
app.locals.version = package.version

var hbs = exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, '/app/views/layouts'),
    partialsDir: path.join(__dirname, '/app/views/partials'),
    extname: '.hbs',
    helpers: helpers
})
app.engine('.hbs', hbs)
app.set('views', path.join(__dirname, '/app/views'))
app.set('view engine', '.hbs')

// Development
if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'))
}

// Routes
app.use('/', require('./app/routes/index'))
app.use('/api', require('./app/routes/api'))


// 404
app.use(function(req, res, next) {
    var err = new Error('Not Found')
    err.status = 404
    next(err)
})


// 500
app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    res.render('error', {
        title: 'Error',
        message: err.message,
        error: (app.get('env') === 'development') ? err : {}
    })
})

// Init
console.log(chalk.cyan('BASKET CASE: ' + process.env.NODE_ENV + ' v' + package.version))

// Expose
module.exports = app
