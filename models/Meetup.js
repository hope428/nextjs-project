import mongoose from 'mongoose'

const MeetupSchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String,
    address: String
})

module.exports = mongoose.models.Meetup || mongoose.model('Meetup', MeetupSchema)