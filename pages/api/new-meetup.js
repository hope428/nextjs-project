import {MongoClient} from 'mongodb'



//api/new-meetup
// ONLY POST REQ

async function handler(req, res) {
    if(req.method === 'POST'){
        const data = req.body;
        // const {title, image, address, description} = data;

        const client = await MongoClient.connect('mongodb+srv://leon-forsythe:hinata11!@cluster0.znbosnr.mongodb.net/reactMeetups?retryWrites=true&w=majority')

        const db = client.db()

        const meetupsCollection = db.collection('meetups')

        const result = await meetupsCollection.insertOne(data)

        console.log(result);

        client.close()

        res.status(201).json(result)
    }

}

export default handler