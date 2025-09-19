import mongoose from "mongoose";
mongoose.connect(process.env.Data_Base_Connection, {
  dbName: "Colset",
});
const register_User_Schema = new mongoose.Schema({
  Fname: { type: String, require: true },
  Lname: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});

const RegisterUser =
  mongoose.models.Users || mongoose.model("Users", register_User_Schema);

export default RegisterUser;
