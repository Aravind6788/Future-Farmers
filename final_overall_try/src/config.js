// Try/src/config.js

const mongoose = require('mongoose');

const connect = mongoose.connect("mongodb://0.0.0.0/Datastore", { useNewUrlParser: true, useUnifiedTopology: true });

connect.then(() => {
  console.log("Database connected successfully");
}).catch((err) => {
  console.error("Database connection error:", err);
});

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const PostSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
});

const LandSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, // Change the type to ObjectId
    ref: 'User', // Reference to the 'User' model
    required: true,
  },

  image: {
    data: Buffer,
    contentType: String,
  },
  size: {
    type: Number,
    required: true,
  },
  leasePrice: {
    type: Number,
    required: true,
  },
  ownerName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  landType: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);
const Post = mongoose.model("Post", PostSchema);
const Land = mongoose.model("LandDetails", LandSchema);

module.exports = {
  User,
  Post,
  Land,
};
