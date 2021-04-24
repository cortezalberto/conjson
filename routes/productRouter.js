const express = require('express')

const router = express.Router()

const controller = require('../controller/productoController');



// Formulario de creación de productos (GET)
router.get('/cart', controller.cart);

// Formulario de creación de productos (GET)
router.get('/create', controller.create);


// Detalle de un producto particular (GET)
router.get('/:id', controller.show);

// El get de la Barra de Búsqueda
router.get('/search', controller.search)


// Formulario de edición de productos (GET)
router.get('/:id/edit', controller.edit);

// Acción de creación (a donde se envía el formulario) (POST)
router.post('/store', controller.store);

// Acción de edición (a donde se envía el formulario) (PUT)
router.put('/:id', controller.update);

// Acción de borrado (DELETE)
router.delete('/:id', controller.destroy);

module.exports = router;