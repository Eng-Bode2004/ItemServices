const express = require('express');
const router = express.Router();
const MamasKitchenItemController = require('../Controllers/MamasKitchenItemController');

// POST /api/mamas-kitchen-items
router.post('/', MamasKitchenItemController.createItem);

// In routes file (e.g. routes/MamasKitchenItemRoutes.js)
router.get('/shop/:shopId', MamasKitchenItemController.getItemsByShop);


module.exports = router;
