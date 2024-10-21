const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema(
    {
        position : {
            type : String,
            required : true
        },
        company : {
            type : String,
            required : true
        },
        location : {
            type : String,
            required : true
        },
        salary : {
            type : Number,
            required : true,
        },
        description : {
            type : String,
            required : true
        }
    },
    {
        collection : 'jobs'
    }
)
module.exports = mongoose.model('jobs', jobSchema)