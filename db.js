// 🔗 MongoDB connection
connect("mongodb+srv://raamnivi:6SmFHzbim.BrBM9@cluster0.kjidpxf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ MongoDB connection failed:", err));

import mongoose, { connect } from 'mongoose';

export default mongoose;