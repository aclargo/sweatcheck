const mongoose = require('mongoose')
const { ObjectId } = require('mongodb')

const Schema = mongoose.Schema

//note first and last are not required to login
const usersVerificationSchema = new Schema({
    user: {
        type: ObjectId
    },
    uniqueString: {
        type: String
    },
    createdAt: {
        type: Date
    },
    expiresAt: {
        type: Date
    }
    
}, { versionKey: false })   //versionKey: false -> gets rid of _v when adding to a collection

// the name you send below is the name that the collection will be called
var collectionName = 'UsersVerification'
module.exports = mongoose.model('UserVerification',usersVerificationSchema,collectionName)

