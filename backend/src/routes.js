const express = require('express');
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
const routes = express.Router();

routes.post('/sessions', SessionController.create);

//lista ongs
routes.get('/ongs', OngController.index);
//cadastra ongs 
routes.post('/ongs', OngController.create);

//lista casos de uma ong específica
routes.get('/profile',ProfileController.index);

//lista casos
routes.get('/incidents', IncidentController.index)
//cadastra caso 
routes.post('/incidents', IncidentController.create);
//deleta casos
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;