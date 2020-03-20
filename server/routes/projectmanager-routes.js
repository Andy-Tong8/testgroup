const controller = require('../controllers/projectmanager-controller')

module.exports = (app) => {
    app.post('/api/create', controller.create);
    app.get('/api/readAll/:sort', controller.readAll);
    app.get('/api/readOne/:id', controller.readOne);
    app.put('/api/updateOne/:id', controller.updateOne);
    app.delete('/api/deleteOne/:id', controller.deleteOne);
}
