const express = require('express')

const router = express.Router()

const controller = require('../controller/productoController');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: path.resolve(__dirname, '../public/images'),
    filename: (req, file, cb) => {
        cb(null, 'img-' + Date.now() + path.extname(file.originalname));
    }
});


const upload = multer({ storage });
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

// Acción de creación (a donde se envía el formulario) (POST)
router.post('/store', upload.single('image'), controller.store);
// advertir el segundo parámetro quense le avisa de 1 sólo archivo


// Acción de edición (a donde se envía el formulario) (PUT)
router.put('/:id', upload.single('image'), controller.update);

// Acción de borrado (DELETE)
router.delete('/:id', controller.destroy);

module.exports = router;