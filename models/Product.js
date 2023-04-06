import mongoose from "mongoose";

const {Schema} = mongoose

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    photos: {
        type: [String],
    },
    price: {
        type: Number,
        required: true,
    },
    // featured: {
    //     type: Boolean,
    //     default: false
    // },

    
})

export default mongoose.model("Product", ProductSchema)