import mongoose from "mongoose";

const conversationSchema = mongoose.Schema({
    type: {
        type: String,
        enum: ['private', 'group'],
        required: true
    },
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group'
    }
}, {
    timestamps: true
});

const Conversation = mongoose.model('Conversation', conversationSchema);

export default Conversation;