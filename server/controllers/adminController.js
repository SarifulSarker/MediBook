
import validator from "validator"
import bycrypt from 'bcrypt'
import { v2 as cloudinary } from "cloudinary";
import doctorModel from '../models/doctorModel.js'
import jwt from 'jsonwebtoken'
/// api for adding doctor

const addDoctor = async (req, res) => {
  try {
    const {
      name, email, password, speciality, degree,
      experience, about, fees, address
    } = req.body;

    const imageFile = req.file;
    if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
      return res.json({ success: false, message: "Missing Details" });
    }

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Enter a valid email" });
    }

    if (password.length < 8) {
      return res.json({ success: false, message: "Enter a strong password" });
    }

    // Hash password
    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(password, salt);

    // Upload image to Cloudinary
    if (!imageFile) {
      return res.json({ success: false, message: "Image file missing" });
    }
    
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
    const imageUrl = imageUpload.secure_url;

    const doctorData = {
      name,
      email,
      image: imageUrl,
      password: hashedPassword,
      speciality,
      degree,
      experience,
      about,
      fees: Number(fees),
      address: JSON.parse(address),
      date: Date.now()
    };

    const newDoctor = new doctorModel(doctorData);
    await newDoctor.save();

    return res.json({ success: true, message: "Doctor added" });

  } catch (error) {
    console.error(error);
    return res.json({ success: false, message: error.message });
  }
};

//api for admin login
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

  
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign({ email }, process.env.JWT_SECRET);

      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }

  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
}


// api for to get all doctor for admin panel

const allDcotors = async(req, res) =>{
  try {
  const doctors = await doctorModel.find({}).select('-password')
  
  res.json({success:true, doctors})
  

    
  } catch (error) {
     console.error(error);
    res.json({ success: false, message: error.message });
  }
}


export {addDoctor,loginAdmin,allDcotors}