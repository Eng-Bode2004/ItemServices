const MamasKitchenServices = require('../Services/MamasKitchenItemServices');

class MamasKitchenItemController {
    // Create a new item
    async createItem(req, res) {
        try {
            const itemData = req.body;

            const newItem = await MamasKitchenServices.createMamasKitchenItem(itemData);

            res.status(201).json({
                status: 'success',
                message: 'MamasKitchen item created successfully.',
                data: newItem
            });
        } catch (error) {
            res.status(400).json({
                status: 'failure',
                message: 'Failed to create item.',
                error: error.message
            });
        }
    }

    async getItemsByShop(req, res) {
        try {
            const { shopId } = req.params;

            const items = await MamasKitchenServices.getItemsByShopId(shopId);

            res.status(200).json({
                status: 'success',
                message: `Items for shopId ${shopId} retrieved successfully.`,
                data: items
            });
        } catch (error) {
            res.status(400).json({
                status: 'failure',
                message: 'Failed to retrieve items.',
                error: error.message
            });
        }
    }

}

module.exports = new MamasKitchenItemController();
