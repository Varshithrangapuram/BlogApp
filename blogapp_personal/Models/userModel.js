const mongoose = require("mongoose");
//creation of user schema
const userSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: [true, "username is required"],
      },
      email: {
        type: String,
        required: [true, "email is required"],
      },
      password: {
        type: String,
        required: [true, "password is required"],
      },
      blogs:[
        {
          type:mongoose.Types.ObjectId,
          ref:'Blog', //reference from blogModel whose name is Blog
        },
    ],
  },
  { timestamps: true }
  );

  const userModel = mongoose.model("User", userSchema);
  module.exports = userModel;