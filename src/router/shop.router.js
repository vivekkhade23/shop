const express = require('express')
const shopRouter=express.Router();
const shopModel=require("../model/shop.model");

shopRouter.get("/shopping",async(req,res)=>{
    try {
      

        let items= await shopModel.find({})


        return res.send(items)
    } catch (e) {
        return res.send(e)

    }
})

shopRouter.post("/shopping",async(req,res)=>{
   try {
    const {title,quantity,priority,time}=req.body;
    
    let pro= new shopModel({title,quantity,priority,time,bookmark:false})
   pro =await pro.save();
    return res.send("item created successfully")
   } catch (e) {
return res.send(e)
   }
})
shopRouter.put("/shopping/:id",async(req,res)=>{
   try {
    const {id}=req.params;
    // const {bookmark}=req.body
    console.log(id)
    let item= shopModel.findByIdAndUpdate(id,{bookmark:true},function(err,data){
        if(err){
            console.log("there is an error")
        }else{
            console.log("it worked")
        }
    })
    console.log(item)
    return res.send("item added to bookmark successfully")
   } catch (e) {
    res.send(e)
   }
})

shopRouter.delete("/shopping/:id",async(req,res)=>{
    try {
        const {id}=req.params;
       shopModel.findByIdAndDelete(id,function(err,data){
            if(err){
                console.log("there is an error")
            }else{
                console.log("it worked")
            }
        })
    
        return res.send("item added to deleted successfully")
     
    }
    catch(e){
        console.log(e)
        return res.send(e)

    }
})



module.exports=shopRouter;