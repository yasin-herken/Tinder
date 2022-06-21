import mongoose from "mongoose";

const cardSchema = {
    name: String,
    imgUrl: String
}

export default mongoose.model('cards',cardSchema);