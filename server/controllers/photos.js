import PhotosMassage from "../models/photos";

export const getPhotos = async (req, res) => {
  try {
    const PhotosMassage = await PhotosMassage.find();

    res.status(200).json(PhotosMassages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const addPhoto = async (req, res) => {
  const { message, selectedFile } = req.body;
  const newPhotosMassage = new PhotosMassage({
    message,
    selectedFile,
  });
  try {
    await PhotosMassage.save();
    res.status(201).json(PhotosMassage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
