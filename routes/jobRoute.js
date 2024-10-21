const express = require('express')
const router = express.Router()
const {getAllJobs, addNewJob, updateJob, deleteJob} = require('../controllers/jobsController')
const {validateJob} = require('../controllers/validateController')

router.route('/').post(addNewJob).get(getAllJobs).patch(updateJob).delete(deleteJob)
router.route('/validate').post(validateJob)

module.exports = router