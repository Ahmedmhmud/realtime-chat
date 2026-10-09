import mongoose from 'mongoose';

const NORMAL_CONSTRAINTS = {
    type: String,
    required: true
};

const UNIQUE_CONSTRAINTS = {
    type: String,
    required: true,
    unique: true
};

const userSchema = new mongoose.Schema({
    name: NORMAL_CONSTRAINTS,
    email: UNIQUE_CONSTRAINTS,
    password: NORMAL_CONSTRAINTS,
    phoneNumber: UNIQUE_CONSTRAINTS
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User; 