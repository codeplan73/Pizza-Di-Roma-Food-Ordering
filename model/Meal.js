const mongoose = require('mongoose');

const MealSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    ingredients: [{
        type: String,
        required: true
    }],
    cookingTime: {
        type: Number,
        required: true
    },
    servingSize: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean, 
        default:false
    },
    freeShipping: {
        type:Boolean,
        default: false
    },
     user: {
        type:mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},
// to enable creation of moongose virtual on-the-fly
{ timestamps: true, toJSON: {virtuals:true}, toObject:{virtuals:true}}
);

// MealSchema.virtual('reviews', {
//     ref:'Review',
//     localField: '_id', 
//     foreignField: 'meal',
//     justOne: false,
//     match: {rating:4} //optional
// })

//remove all reviews associated with a product when deleting the product
// MealSchema.pre('remove', async function(next){
//     await this.model('Review').deleteMany({product:this._id})
// })

module.exports = mongoose.model("Meal", MealSchema);
