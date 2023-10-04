import mongoose from 'mongoose';

const sellerSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    firstname: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20
    },
    sellername: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    accno: {
        type: String
    },
    cvv:{
        type: String
    },
    storeName:{
        type: String
    }
});

const Seller = mongoose.model('seller', sellerSchema);

export default Seller;