const MamasKitchenItem = require('../Models/MamasKitchenItem');

class MamasKitchenServices {
    async createMamasKitchenItem(itemData) {
        try {
            const { name, description, price, shopId, imageUrl, spicy } = itemData;

            // Basic validation
            if (!name || !price || !shopId) {
                return Promise.reject(new Error("name, price, and shopId are required fields."));
            }

            // Create the item
            const newItem = await MamasKitchenItem.create({
                name,
                description: description || '',
                price,
                shopId,
                imageUrl,
                spicy: spicy || false
            });

            return newItem;
        } catch (error) {
            throw error;
        }
    }

    async getItemsByShopId(shopId) {
        try {
            if (!shopId) {
                return Promise.reject(new Error("shopId is required."));
            }

            const items = await MamasKitchenItem.find({ shopId });
            return items;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new MamasKitchenServices();
