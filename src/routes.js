const express = require('express');
const OngController = require('./controller/OngController');
const IncidentController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');

const routes = express.Router();

//const connection = require('./database/connetion');
/*
 *
 *  Tipos de parametros
 *  Query params: parametros nomeados enviados na rota após "?"
 *   Route params: Parametros utilizados para identificar recursos "ex.: user/:id"
 *   Request body: 
 */

/**
 * Driver: SELECT * FROM users
 * Query Build: table('users').select('*').where()
 */
/*
routes.get('/users/:id', (request, response) => {
    const params=request.query;
    const id=request.params;
    console.log(params);
    console.log(id);
    return response.json(
        {
            "evento": "Semana omnistack 11",
            "aluno": "Fabio Pereira"
        }
    )
});
*/

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.get('/incidents', IncidentController.index);
routes.get('/profile', ProfileController.index);


routes.post('/ongs', OngController.create);
routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes;