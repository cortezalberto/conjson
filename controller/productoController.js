
// ESTO SERIA EL GESTOR DEL MODELO
const jsonDB = require('../model/jsonDatabase');

// Maneja todos los métodos para PRODUCTO, que lo pasa como parámetro
const productModel = jsonDB('products');

let productController = {

    home: (req, res) => {
        console.log('entro al home del produt controller y redirijo')

        res.redirect('/')

    },

// Función que muestra el detalle del producto, cuando hacemos click en la foto
    show: (req, res) => {

     // Le delego al modelo la responsabilidad
     // que la busque por ID del registro seleccionado 
     // es por ello que atrapo em parámetro id  
        const product = productModel.find(req.params.id);
        console.log(product)
        if (product) {
            res.render('detailProduct', { product });
        } else {
            res.render('error404');
        }
    },

// Función que muestra el formulario de crear Productos
    create: (req, res) => {
        console.log('Entre a create')
        res.render('createProduct');
    },
// Función que simula el almacenamiento, en este caso en array
    store: (req, res) => {
        console.log('Entre a store')
     // Atrapo los contenido del formulario
        const product = req.body;

         // Verificar si viene un archivo, para nombrarlo  
         product.image = req.file ? req.file.filename : '';
      
        console.log(product.image)

    // Delego la responsabilidad al modelo para crear producto  
       console.log(product)
    // Cuidade sólo mando el cuerpo del FORM, el Id me lo asigna el Modelo  
    productModel.create(product);
   
        res.redirect('/')
    },

// FUnción que muestra el formulario de edición
    edit: (req, res) => {
   // Delego al modelo que busque el producto     
        let product = productModel.find(req.params.id);

        console.log(product)
        if (product) {
            res.render('editProduct', { product });
        } else {
            res.render('error404');
        }
    },

// Función que realiza cambios en el producto seleccionado
    update: (req, res) => {
        console.log("Entré al update")
        // Armo la estructura del registro auxiliar (product)
        // El id lo saco de params y el resto de los campos del body
        console.log(' soy la nueva: ' +req.body.image)
        console.log('soy la vieja '+ req.body.oldImage)
        let  product = req.body;

        product.id = req.params.id;

        req.body.image = req.file ? req.file.filename : req.body.oldImagen;
        console.log(' soy la nueva' +product.image)
        console.log('soy la vieja '+ product.oldImage)
        console.log('.......................')
        console.log(product)
       
       
       
        delete product.oldImage;


        // Delego la responsabilidad al modelo que actualice
        productModel.update(product);
          

        res.redirect('/')
    },

// Función que elimina del Array visitados ek producto seleccionado
    destroy: (req, res) => {
        console.log('entre destroy')
        productModel.delete(req.params.id);

 // Ahora se mostrará todo porque los productos los varga de un archivo       
        res.redirect('/')
    },


    cart: (req, res) => {
        res.render('products/cart');
    },

    search: (req, res) => {

        let dataABuscar = req.query
        res.sed(dataABuscar)
    }

}


module.exports = productController
