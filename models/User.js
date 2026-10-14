import mongoose from 'mongoose';

const NORMAL_CONSTRAINTS = {
    type: String,
    required: true
};

const userSchema = new mongoose.Schema({
    name: NORMAL_CONSTRAINTS,
    email: NORMAL_CONSTRAINTS,
    password: NORMAL_CONSTRAINTS,
    phoneNumber: NORMAL_CONSTRAINTS
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;
