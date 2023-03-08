import {MongoClient} from 'mongodb'
import Meetup from '../../models/Meetup'



//api/new-meetup
// ONLY POST REQ

async function handler(req, res) {
    if(req.method === 'POST'){
        const data = req.body;
        // const {title, image, address, description} = data;

        const client = await MongoClient.connect(process.env.MONGODB_URI)

        const db = client.db()

        const meetupsCollection = db.collection('meetups')

        const result = await meetupsCollection.insertOne(data)

        console.log(result);

        client.close()

        res.status(201).json(result)
    }

}

export default handler