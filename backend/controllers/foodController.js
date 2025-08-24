import { log } from "console";
import foodModel from "../models/foodModel.js";
import cloudinary from "../config/cloudinary.js";
// import fs from 'fs'

//add food item 

const addFood = async (req, res) => {
  try {
   const {name,description,price,category} = req.body;

    const image = req.file;

   let imageUrl = "";
if (req.file) {
  const result = await new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { resource_type: "image" },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
    stream.end(req.file.buffer); // yahi buffer directly upload hoga
  });

  imageUrl = result.secure_url;
}

    const formData = {
      name,
      description,
      price: Number(price),
      category, 
      image: imageUrl
    }

    const food = new foodModel(formData)
    await food.save();

    res.json({ success: true, message: "Food Added", data: food });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error adding food", error: error.message });
  }
};

//all food list
const listFood = async (req,res) => {
    try {
        const foods = await foodModel.find({})
        res.json({success:"true",data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
        
    }
}

//remove food item

const removeFood = async (req, res) => {
  try {
   
    // Delete from DB
    await foodModel.findByIdAndDelete(req.body.id);

    res.json({ success: true, message: "Food Removed" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error removing food", error: error.message });
  }
};

export {addFood,listFood,removeFood}