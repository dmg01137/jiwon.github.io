const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    chat: {
        type: String,
        required: true
    },
    user: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        name: {
            type: String,
            required: true
        }
    }
}, { timestamps: true });

module.exports = mongoose.model("Chat", chatSchema);
