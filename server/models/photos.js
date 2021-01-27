import mongoose from "mongoose";
const photoSchema = mongoose.Schema({
  creator: String,
  message: String,
  selectedFile: String,
  likeCount: {
    type: Number,
    default: null,
  },
  cretedAt: {
    type: Date,
    default: new Date(),
  },
});
const PhotosMassage = mongoose.model("PhotosMassage", photoSchema);
export default PhotosMassage;
