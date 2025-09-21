// backend/routes/reportRoutes.js

const express = require('express');
const router = express.Router();
const {
  createReport,
  getReports,
  getReportById,
  updateReportStatus,
  upvoteReport,
} = require('../controllers/reportController');
const { protect } = require('../middleware/authMiddleware');
const { upload } = require('../middleware/uploadMiddleware');

// Public routes
router.route('/').get(getReports);
router.route('/:id').get(getReportById);

// Protected routes (require user to be logged in)
router.route('/').post(protect, upload.single('image'), createReport);
router.route('/:id/status').put(protect, updateReportStatus); // Changed to /status to be more specific
router.route('/:id/upvote').post(protect, upvoteReport);

module.exports = router;