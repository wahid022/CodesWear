import connectDb from "../../../middleware/mongoose";
import Product from "../../../models/Product";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      await Product.insertMany(req.body); // Bulk insert for better performance
      return res.status(200).json({ success: "Products added successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Failed to add products", details: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
};

export default connectDb(handler);
