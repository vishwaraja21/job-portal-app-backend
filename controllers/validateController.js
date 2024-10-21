const jobModel = require('../models/jobModel')
const bookModel = require('../models/jobModel')

const validateJob = async(request, response) => {
    const givenPosition = request.body.position

    try
    {
        const validPosition = await jobModel.findOne({position : givenPosition})
        if(validPosition)
        {
            return response.status(200).json(validPosition)
        }
        return response.status(400).send({message: `Invalid Position!!`})
    }
    catch(error)
    {
        response.status(500).send({message : error.message})
    }
}

module.exports = {validateJob}