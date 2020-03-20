const controller = require('../controllers/controller')

module.exports = app => {
    app.post('/api/create', controller.create);
    app.get('/api/find', controller.find);
    app.get('/api/findOne/:id', controller.findOne);
    app.put('/api/updateOne/:id', controller.updateOne);
    app.delete('/api/deleteOne/:id', controller.deleteOne);
}