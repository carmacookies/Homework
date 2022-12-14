import mongoose from "mongoose";
import Joi from 'joi';


const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

})

const UserModel = mongoose.model("users", UserSchema)

export default UserModel

export const UserValidation = Joi.object({
    email: Joi
        .string()
        .email()
        .required(),
    password: Joi
        .string()
        .required()
})


