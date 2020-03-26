const express = require('express');
const router = express.Router(); // initialize router

const createUser = require('../controllers/createUser')
const login = require('../controllers/getUser')
const createActivity= require('../controllers/createActivity')
const getActivity = require('../controllers/getActivity')
const getActivityDate=require('../controllers/getActivityDate')
const updatePassword=require('../controllers/updatePassword')
const report=require('../controllers/report')

router.post('/login', login)
router.post('/signup', createUser)
router.get('/activityuser', getActivity)
router.post('/createactivity', createActivity)
router.get('/activitydate/:startDate',getActivityDate)
router.post('/updatepassword',updatePassword)
router.get('/report',report)
module.exports = router;