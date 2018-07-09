module.exports.all = (app) => {
    //Routes
    //
    const GeneralRoute = require('./general.routes.js');
    GeneralRoute.run(app); 
}
