import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    text: String,
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    conversation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Conversation'
    }
});

const Message = mongoose.model('message', messageSchema);

export default Message;