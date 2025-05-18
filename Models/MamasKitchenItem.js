const mongoose = require("mongoose");

const MamasKitchenItemSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },

    description:{
        type: String,
        default: '',
    },

    price:{
        type: Number,
        required: true,
    },

    shopId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shop',
    },

    imageUrl:{
        type: String,
    },

    isAvailable:{
        type: Boolean,
        default: true,
    },

    spicy:{
        type: Boolean,
        default: false,
    },

},{timestamps: true});

module.exports = mongoose.model('MamasKitchenItem', MamasKitchenItemSchema);