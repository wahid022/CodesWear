import connectDb from "../../../middleware/mongoose";
import Product from "../../../models/Product";

const handler = async (req, res) => {
  if (req.method === "POST") {
    let updatedProducts=[];
    for (let i = 0; i < req.body.length; i++) {
        let p=await Product.findByIdAndUpdate(req.body[i]._id,req.body[i]); //findByIdAndUpdate(finding paramter,Object you want to update)
        updatedProducts.push(p)
    }
    res.status(200).json({ success:updatedProducts });
  } 
  
  else {
    res.status(404).json({ error: "This method is not allowed" });
  }
  
};

export default connectDb(handler); // this is done to update the changes to db in the database ..
