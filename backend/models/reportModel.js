const mongoose = require('mongoose');

const reportSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  category: {
    type: String,
    required: [true, 'Please select a category'],
    enum: ['Pothole', 'Garbage Overflow', 'Broken Streetlight', 'Water Logging', 'Flooding', 'Landslide','Other'],
  },
  description: { type: String, required: [true, 'Please provide a description'] },
  imageUrl: { type: String, required: [true, 'Please upload an image'] },
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], required: true }, // [longitude, latitude]
    address: { type: String },
  },
  status: {
    type: String,
    required: true,
    enum: ['Reported', 'Acknowledged', 'In Progress', 'Resolved'],
    default: 'Reported',
  },
  upvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  isEmergency: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

reportSchema.index({ user: 1 });
reportSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Report', reportSchema);