import mongoose from "mongoose";

const postSchema=mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    desc:String,
    firstname:String,
    lastname:String,
    likes:[],
    image:String,
    createdAt:{
        type:Date,
        default:Date.now()
    }
},
{
    timestamps:true
});

var PostModel = mongoose.model("Posts",postSchema)
export default PostModel