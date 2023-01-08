import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,

    },
    dob: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    }
},{
    timestamps: true,
    collection:"Users"
})

const User = mongoose.model('Users', userSchema);
export default User;