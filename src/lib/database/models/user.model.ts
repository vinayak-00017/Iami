import { Document } from "mongodb";
import { Schema, model, models } from "mongoose";

export interface IUser extends Document {
    clerkId: string;
    email: string;
    username: string;
    firstName?: string;
    lastName?: string;
    planId?: number;
    creditBalance?: number;
    photo: string;
}


const UserSchema = new Schema({
    clerkId: {
        type: String,
        requred: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    planId: {
        type: Number,
        default: 1
    },
    creditBalance: {
        type: Number,
        default: 10
    },
    photo: {
        type: String,
        required: true
    }
})

const User = models?.User || model("User", UserSchema);

export default User;