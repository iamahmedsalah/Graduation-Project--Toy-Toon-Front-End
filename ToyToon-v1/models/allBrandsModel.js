const mongoose = require('mongoose');

// 1- Create Schema

const allBrand = new mongoose.Schema({
    imgPath: {
        type: String,
        required:true,
    },
    productName: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 32,
    },
    info: {
        type: {
            License:String,
            productType:String,
            more:String
        },
        required: true,
    },
    price: {
        type: Number,
        required:true,
    },
    slug: {
        type: String,
        lowercase: true,
    },
    brand:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Brands'
    }
}, { timestamps: true });


// 2- Create Model

module.exports = mongoose.model('AllBrands', allBrand );