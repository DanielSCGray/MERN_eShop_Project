//change all occurances of grill. Add or delete routes as required

const GrillController = require('../controllers/grill.controller');

module.exports = app => {
    app.get('/api/grills', GrillController.findAllGrills);
    app.get('/api/grills/:id', GrillController.findOneGrill);
    app.patch('/api/grills/:id', GrillController.updateGrill);
    app.post('/api/grills', GrillController.createGrill);
    app.delete('/api/grills/:id', GrillController.deleteOneGrill);
    app.put('/api/grills/:id', GrillController.updateGrill);
}