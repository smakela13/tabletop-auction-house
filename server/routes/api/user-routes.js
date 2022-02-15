const router = require('express').Router();
const {
    Navbar,
    store,
    Shopkeeper,
    addProduct,
    updateProduct,
    Contact,
    Login,
    Signup,
    profile,
    Footer,
    SingleProduct,
    themes,
} = requires('../../controllers/user-controller');

const { addProduct } = require('../../../client/src/utils/API');
const auth = require('../../utils/auth');
const { authMiddleware } = require('../../utils/auth');

router.route('/').post(store).put(authMiddleware);

router.route('/Signup').post(addUser).put(authMiddleware, addProduct);

router.route('/products').put(addProduct).put(authMiddleware, addProduct);

router.route('/products/:productId').update(authMiddleware, updateProduct);

router.route('/products/:productId').delete(authMiddleware, deleteProduct);
