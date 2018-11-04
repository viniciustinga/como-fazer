const express = require('express');
const router = express.Router();
const controller = require('../controllers/categorias');

router.get('/nova', controller.novaForm);
router.post('/nova', controller.nova);
router.get('/', controller.listar);
router.get('/excluir/:id', controller.excluir);
router.get('/editar/:id', controller.editar);
router.post('/editar/:id', controller.atualizar);

module.exports = router