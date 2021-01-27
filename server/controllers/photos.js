
import PhotosMassage from "../models/photos.js";

export const getPhotos = async (req, res) => {
  try {
    const PhotosMassages = await PhotosMassage.find();

    res.status(200).json(PhotosMassages);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
export const addPhoto = async (req, res) => {
  const photo = req.body;
  const newPhoto = new PhotoMassage(photo);
  try {
    await newPhoto.save();
    res.status(201).json(newPhoto);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};
