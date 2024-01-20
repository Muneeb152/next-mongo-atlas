import { MongoClient } from 'mongodb';


async function handler(req, res) {
    if (req.method === 'POST') {
        //const data = req.body;
        //const { title, image, address, description } = data;
        const client = await MongoClient.connect('mongodb+srv://mnbch52:bcNAF4KhWSi67P47@cluster0.r5colis.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();
        const meetupsCollection = db.collection('meetups');
        const meetups = await meetupsCollection.find().toArray();
        console.log("Meetups from database are:", meetups);
        client.close();
        res.status(201).json({message:'Meetup are', meetups:meetups});
    }
}

export default handler;