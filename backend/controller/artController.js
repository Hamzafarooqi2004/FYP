const Artwork = require('../models/artWork');  

const saveArtwork = async (req, res) => {
  try {
    // Extract data from the request
    console.log(req.body);
    const { title, price, medium, style, category, ownership, description } = req.body;
    const image = req.file.filename;
    console.log(image);

    // Create an instance of Artwork model
    const newArtwork = new Artwork({
      title,
      price,
      medium,
      style,
      category,
      ownership,
      description,
      image: image
    });

    // Save the artwork to the database
    await newArtwork.save();

    res.status(201).json({ message: 'Artwork uploaded successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  saveArtwork
};

