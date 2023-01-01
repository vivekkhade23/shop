const mongoose=require("mongoose");


const shopSchema=new mongoose.Schema({
    title:{type:String,required:true},
    quantity:{type:Number,required:true},
    priority:{type:String,required:true},
    time:{type:String,required:true},
    bookmark:{type:Boolean,required:true}
})

const shopModel=mongoose.model("shop",shopSchema);

module.exports=shopModel;