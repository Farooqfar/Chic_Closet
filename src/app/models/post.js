import mongoose from "mongoose";

mongoose.connect(process.env.Data_Base_Connection, {
  dbName: "Colset",
});

const postSchema = mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  sale: false,
  sold: false,
  image: String,
});

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
export default Post;
