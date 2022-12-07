const mongoose = require('mongoose');
const express = require('express');
let router = express.Router();

let studentSchema = require('../models/Student');
// Create a student
router.route('/create-student').post((req, res, next) => {
    studentSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
})