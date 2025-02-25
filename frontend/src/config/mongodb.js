import mongoose from "mongoose";

// Load biến môi trường
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    // Kết nối với MongoDB Atlas sử dụng biến môi trường
    await mongoose.connect(process.env.VITE_MONGODB_URI, {
      // Cấu hình bổ sung để tránh các cảnh báo hoặc lỗi
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Kết nối thành công đến MongoDB Atlas");
  } catch (error) {
    console.error("Database Connection Error:", error.message);
    process.exit(1); // Thoát nếu có lỗi kết nối
  }

  // Xử lý khi mất kết nối
  mongoose.connection.on("disconnected", () => {
    console.log("Database Disconnected");
  });

  // Xử lý khi kết nối lại
  mongoose.connection.on("reconnected", () => {
    console.log("Database Reconnected");
  });

  // Xử lý lỗi kết nối
  mongoose.connection.on("error", (error) => {
    console.error("MongoDB Connection Error:", error);
  });
};

export default connectDB;