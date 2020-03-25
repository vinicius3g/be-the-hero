const express = require('express');
const ongController = require('./controllers/OngsControllers');
const incidentController = require('./controllers/IncidentController');
const profileController = require('./controllers/ProfileControllers');
const sessionController = require('./controllers/sessionController')


const routes = express.Router();

routes.post('/sessions', sessionController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/profile', profileController.index);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);


module.exports = routes;