const bookModel = require('../models/jobModel')
const initialData = require('../data/initialData')
const jobModel = require('../models/jobModel')

const getAllJobs = async(request, response) =>
{
    try{
        const jobs = await jobModel.find()
        if(jobs.length === 0)
        {
            const initialJobs = await jobModel.insertMany(initialData)
        }
        return response.status(200).json(jobs)
    }
    catch(error)
    {
        response.status(500).send({message : error.message})
    }
}

const addNewJob = async(request, response) => {
    const jobToBeAdded = request.body

    try
    {
        const existingJob = await jobModel.findOne({position : jobToBeAdded.position})
        if(existingJob)
        {
            return response.status(409).send({message: `A job with position ${jobToBeAdded.position} already exists`})
        }
        const insertedJob = await jobModel.create(jobToBeAdded)
        response.status(201).json(insertedJob)
    }
    catch(error)
    {
        response.status(500).send({message : error.message})
    }
}

const updateJob = async(request, response) => {
    const jobToBeUpdated = request.body

    try
    {
        const updatedJob = await jobModel.updateMany({position : jobToBeUpdated.position}, jobToBeUpdated)
        response.status(200).json(updatedJob)
    }
    catch(error)
    {
        response.status(500).send({message : error.message})
    }
}

const deleteJob = async(request, response) => {
    const jobToBeDeleted = request.body

    try
    {
        const deletedJob = await jobModel.deleteOne({position : jobToBeDeleted.position})
        response.status(200).json(deletedJob)
    }
    catch(error)
    {
        response.status(500).send({message : error.message})
    }
}

module.exports = {getAllJobs, addNewJob, updateJob, deleteJob}