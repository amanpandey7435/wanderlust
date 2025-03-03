const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const passportLocalMongoose=require("passport-local-mongoose");
const userSchema=new Schema({
    email:{
        type:String,
        required:true
    },

})
userSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model('User',userSchema);
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const passportLocalMongoose = require("passport-local-mongoose");

// const userSchema = new Schema({
//     email: {
//         type: String,
//         required: true
//     }
// });

// // Apply the plugin correctly
// userSchema.plugin(passportLocalMongoose);

// // Ensure model is properly assigned
// const User = mongoose.model("User", userSchema);
// module.exports = User;
