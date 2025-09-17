const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number], // [longitude, latitude]
            required: true
        }
    },
    state: { type: String, required: true },
    city: { type: String, required: true },
    imageUrl: { type: String }, // For simplicity, we'll store a URL. In a real app, you'd use a service like Cloudinary or S3.
    reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: { type: String, enum: ['Submitted', 'Acknowledged', 'In Progress', 'Resolved'], default: 'Submitted' },
    upvotes: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

reportSchema.index({ location: '2dsphere' }); // Index for geospatial queries

module.exports = mongoose.model('Report', reportSchema);