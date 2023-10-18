const express = require('express');
const router = express.Router();
const {
    getAllAssessment,
    addAssessment,
    updateAssessmentByID,
    deleteAssessmentByID,
    getAssessmentByID,
} = require('../controllers/assessmentController');

router.get('/getAll', getAllAssessment);
router.get('/get/:id', getAssessmentByID);
router.post('/add', addAssessment);
router.put('/update/:id', updateAssessmentByID);
router.delete('/delete/:id', deleteAssessmentByID);

module.exports = router;