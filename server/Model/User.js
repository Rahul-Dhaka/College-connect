const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        default: 'unset',
        required: true
    },
    profilePicture: {
        type: String,
        default: 'https://st4.depositphotos.com/4329009/19956/v/450/depositphotos_199565072-stock-illustration-creative-vector-illustration-default-avatar.jpg'
    },
    bio: {
        type: String,
        trim: true,
        maxlength: 160
    },
    year: {
        type: Number,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    course: {
        type: String,
        required: true,
    },
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    notifications: [
        {
            type: new Schema({
                type: String,
                content: String,
                read: {
                    type: Boolean,
                    default: false
                },
                createdAt: {
                    type: Date,
                    default: Date.now
                }
            })
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    }
});

UserSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('User', UserSchema);
