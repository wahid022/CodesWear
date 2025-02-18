import connectDb from "../../../middleware/mongoose";
import User from "../../../models/User";

const handler = async (req, res) => {
  if (req.method === "POST") {
    
    try {
      let u=new User(req.body);
      await u.save();
      return res.status(200).json({ success: "User added successfully" });
    } 
    
    catch (error) {
      return res.status(500).json({ error: "Failed to add User Details", details: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
};

export default connectDb(handler); // this is done to update the changes to db in the database ..Since the Signup function is returning JSON only 
