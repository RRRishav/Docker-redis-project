import mongoose from "mongoose";




const DB = async  () => {
  mongoose.connect(process.env.MONGO_URI)
 console.log(`
╔══════════════════════════════╗
║  ✅ MongoDB Connected! 🚀     ║
╚══════════════════════════════╝
`);


}


export default DB;
