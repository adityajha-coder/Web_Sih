const express = require('express');
const router = express.Router();
const Report = require('../models/report');
const User = require('../models/user');

// Create a new report
router.post('/', async (req, res) => {
    try {
        const { title, description, latitude, longitude, state, city, imageUrl, userId } = req.body;
        
        if (!userId) {
            return res.status(401).send('User must be logged in to create a report.');
        }

        const report = new Report({
            title,
            description,
            location: { type: 'Point', coordinates: [longitude, latitude] },
            state,
            city,
            imageUrl,
            reportedBy: userId
        });
        await report.save();

        // Award points to the user for reporting
        await User.findByIdAndUpdate(userId, { $inc: { points: 10 } }); // Award 10 points

        res.status(201).json(report);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Get all reports (with state and city filtering)
router.get('/', async (req, res) => {
    try {
        const { state, city } = req.query;
        const filter = {};
        if (state) filter.state = state;
        if (city) filter.city = city;
        
        const reports = await Report.find(filter).populate('reportedBy', 'username').sort({ createdAt: -1 });
        res.status(200).json(reports);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Update a report's status
router.patch('/:id/status', async (req, res) => {
    try {
        const { status } = req.body;
        const report = await Report.findByIdAndUpdate(req.params.id, { status }, { new: true });

        // If the status is 'Resolved', award bonus points to the original reporter
        if (status === 'Resolved' && report) {
            await User.findByIdAndUpdate(report.reportedBy, { $inc: { points: 50 } }); // Award 50 bonus points
        }

        res.status(200).json(report);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;