const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        description: {
            type: String,
            required: true,
            maxlength: 2000
        },
        category: {
            type: ObjectId,
            ref: "Category",
            required: true
        },
        product1: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        link1: {
            type: String,
            required: true,
            maxlength: 2000
        },
        product2: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        link2: {
            type: String,
            required: true,
            maxlength: 2000
        },
        product3: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        link3: {
            type: String,
            required: true,
            maxlength: 2000
        },
        sold: {
            type: Number,
            default: 0
        },
        photo: {
            data: Buffer,
            contentType: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
