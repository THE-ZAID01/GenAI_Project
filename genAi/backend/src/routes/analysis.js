const express = require('express');
const router = express.Router();
const analysisController = require('../controllers/analysisController');

// Analyze input (text, url, image)
router.post('/analyze', analysisController.analyzeInput);

module.exports = router;
