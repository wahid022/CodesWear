import connectDb from "../../../middleware/mongoose";
import User from "../../../models/User";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      let user = await User.findOne({ email: req.body.email });

      if (user) {
        if (
          req.body.email === user.email &&
          req.body.password === user.password
        ) {
          return res.status(200).json({ success: "true", user });
        }
      } else {
        return res
          .status(200)
          .json({ success: false, error: "Invalid Credentials.." });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Failed to add User Details", details: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
};

export default connectDb(handler); // this is done to update the changes to db in the database ..Since the Signup function is returning JSON only
