const express = require('express');
const router = express.Router();
const MamasKitchenItemController = require('../Controllers/MamasKitchenItemController');

// POST /api/mamas-kitchen-items
router.post('/', MamasKitchenItemController.createItem);

module.exports = router;
