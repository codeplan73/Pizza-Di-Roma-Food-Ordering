const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, 'Please provide name'],
        minlength:3,
        maxlength: 50,
    },
    email: {
        type:String,
        unique:true,
        required: [true, "Please provide email"],
        validate: validator.isEmail,
        message: "Please provide valid email"
    },
    password: {
        type: String,
        required: [true, "Please provide password"],
        minlength: 6
    },
    role: {
        type: String,
        enum: ["owner", "admin", "user"],
        default: "user"
    },
    address: {
        type:String
    },
    phone:{
        type:Number
    },
    state: {
        type: String
    },
    postal_code: {
        type: String
    },
    country: {
        type: String
    }
});

// before saving the password
UserSchema.pre("save", async function(){
    if(!this.isModified('password')) return;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function(candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
}

module.exports = mongoose.model("User", UserSchema);
