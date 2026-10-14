import mongoose from "mongoose";

const groupSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }]
}, {
    timestamps: true
});

const Group = mongoose.model('group', groupSchema);

export default Group;