// This is main router file where main routes can be defined

// below is user sub route file where different methods and URLs are defined
const users = require('./user')

function router(app) {
    // main route
    app.use('/user', users)
}

// we need to export this function to call it in the main index file
module.exports = router;