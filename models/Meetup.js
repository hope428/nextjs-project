import mongoose from 'mongoose'

const MeetupSchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String,
    address: String
})

const Meetup = mongoose.model('Meetup', MeetupSchema)

module.exports = Meetup