const express = require('express');
const router = express.Router();
const {
    getAllAssessment,
    addAssessment,
    deleteAssessment,
    updateAssessement,
    getAssessmentByID,
} = require('../controllers/assessmentController');

router.get('/getAll', getAllAssessment);
router.get('/get/:id', getAssessmentByID);
router.post('/add', addAssessment);
router.delete('/delete/:id', deleteAssessmentByID);
router.put('/update/:id', updateAssessementByID)

module.exports = router;