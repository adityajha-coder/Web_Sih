const express = require('express');
const router = express.Router();
const { transcribeAudio } = require('../controllers/speechToTextController');
const { upload } = require('../middleware/uploadMiddleware');
const { protect } = require('../middleware/authMiddleware');

// @route   POST /api/speech-to-text/
// @desc    Transcribe an uploaded audio file
router.post('/', protect, upload.single('audio'), transcribeAudio);

module.exports = router;