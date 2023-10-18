const db = require('../config/db');

const getAllAssessment = async (req, res) => {
    try {
        const [result] = await db.query(`SELECT * FROM assessment`);
        res.status(200).json({
            success: true,
            message: 'Assessment data retrieved successfully',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Unable to retrieve assessment',
            error,
        });
    }
};

const getAssessmentByID = async (req, res) => {
    try {
        const [result] = await db.query(`SELECT * FROM assessment WHERE id = ?`, [
            req.params.id,
        ]);
        res.status(200).json({
            success: true,
            message: 'Assessment data retrieved successfully',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Unable to retrieve assessment',
            error,
        });
    }
};

const addAssessment = async (req, res) => {
    const { assesment_title, duration, lesson_id, question } = req.body;
    try {
        const result = await db.query(
            `INSERT INTO assessment (assesment_title, duration, lesson_id, question) VALUES (?,?,?,?);`,
            [assessment_id, assesment_title, duration, lesson_id, question]
        );
        console.log(result);
        res.status(200).json({
            success: true,
            message: 'Assessment added successfully',
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Unable to add new assessment',
            error,
        });
    }
};

const updateAssessmentByID = async (req, res) => {
    try {
        const [result] = await db.query(`SELECT * FROM assessment WHERE id = ?`, [
            req.params.id,
        ]);
        res.status(200).json({
            success: true,
            message: 'Assessment updated successfully',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Unable to update assessment',
            error,
        });
    }
};

const deleteAssessmentByID = async (req, res) => {
    try {
        const [result] = await db.query(`SELECT * FROM assessment WHERE id = ?`, [
            req.params.id,
        ]);
        res.status(200).json({
            success: true,
            message: 'Assessment deleted successfully',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Unable to delete assessment',
            error,
        });
    }
};

module.exports = { getAllAssessment, getAssessmentByID, addAssessment, updateAssessmentByID, deleteAssessmentByID };