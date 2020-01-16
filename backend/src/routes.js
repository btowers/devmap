const {
    Router
} = require('express');

const
    DeveloperController = require('./controllers/DeveloperController'),
    SearchController = require('./controllers/SearchController');

const routes = Router();

routes
    .get('/developers', DeveloperController.index)
    .post('/developers', DeveloperController.store);

routes
    .get('/search-developers', SearchController.index);

module.exports = routes;