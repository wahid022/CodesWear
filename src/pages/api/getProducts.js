import connectDb from "../../../middleware/mongoose";
import Product from "../../../models/Product";

const handler = async (req, res) => {
  try {
    let products = await Product.find();
    let tshirts = {};

    for (let item of products) {
      if (item.title in tshirts) {
        // Agar wo particular color nahi ho tab 
        if (!tshirts[item.title].color.includes(item.color) && item.availableQty > 0) {
          tshirts[item.title].color = Array.isArray(tshirts[item.title].color) ? tshirts[item.title].color : [];
          tshirts[item.title].color.push(item.color);
        }
        // Agr wo particular size na ho us tshirt ke tab 
        if (!tshirts[item.title].size.includes(item.size) && item.availableQty > 0) {
          tshirts[item.title].size = Array.isArray(tshirts[item.title].size) ? tshirts[item.title].size : [];
          tshirts[item.title].size.push(item.size);
        }
      } else {
        tshirts[item.title] = JSON.parse(JSON.stringify(item)); // Storing the whole object as value and make the itemtitle as key ..
        // agar available quantity honga tab color and size ko array bana do 
        if (item.availableQty > 0) {
          tshirts[item.title].color = [item.color]; // Storing it in form of array ..
          tshirts[item.title].size = [item.size];
        }
      }
    }

    res.status(200).json({ products: tshirts });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
};

export default connectDb(handler);
