const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: (req, file) => {
    const isImage = file.mimetype.startsWith('image/');
    const isAudio = file.mimetype.startsWith('audio/');
    
    let folder = 'civicvoice-others';
    let resource_type = 'auto';

    if (isImage) {
      folder = 'civicvoice-reports';
      resource_type = 'image';
    } else if (isAudio) {
      folder = 'civicvoice-audio';
      resource_type = 'video'; // Cloudinary treats audio as video
    }

    return {
      folder: folder,
      resource_type: resource_type,
      public_id: `file-${Date.now()}`,
    };
  },
});

const upload = multer({ storage: storage });

module.exports = { upload };