import dbConnect from '@/lib/dbConnect';
import {MongoClient} from 'mongodb'
import Meetup from '../../models/Meetup'



//api/new-meetup
// ONLY POST REQ

async function handler(req, res) {

    await dbConnect()

    if(req.method === 'POST'){
        const data = req.body;

        const result = await Meetup.create(data)

        res.status(201).json(result)
    }

}

export default handler