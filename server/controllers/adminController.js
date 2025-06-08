
import validator from "validator"
import bycrypt from 'bcrypt'
import { v2 as cloudinary } from "cloudinary";
import doctorModel from '../models/doctorModel.js'
/// api for adding doctor

const addDoctor = async(req, res) =>{
    try {
        const {
            name, email, password, speciality, degree,
            experience, about, fees, address
        } = req.body;
      const imageFile = req.file
   if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address){
    return res.json({success:false, message:"Missing Details"})
   }

   //validating email formate

   if(!validator.isEmail(email)){
    return res.json({success:false, message:"Enter a valid email"})
   }

   //vallid password
   if(password.length < 8){
    return res.json({success:false, message:"Enter a strong password"})

   }

   // hasing doctor password
   const salt = await bycrypt.genSalt(10)
   const hashedPassword = await bycrypt.hash(password, salt)
   // upload image to cloudinary

   const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})
  imageUrl = imageUpload.secure_url

  const doctorDate = {
    name, 
    email,
    image:imageUrl,
    password:hashedPassword,
    speciality,
    degree,
    experience,
    about,
    fees,
    address:JSON.parse(address),
    date:Date.now()
  }

  const newDoctor = new doctorModel(doctorDate)
 await newDoctor.save()


  res.json({success:true, message:"Doctor added"})
    } catch (error) {
         console.error(error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}

export {addDoctor}