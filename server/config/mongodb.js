import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => {
      console.log('✅ Database connected');
    });

    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit if cannot connect
  }
};

export default connectDB;
    