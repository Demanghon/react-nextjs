import { MongoClient } from "mongodb";


const handler = async (req, res) => {
    console.log("addMeetup");
    if(req.method === 'POST'){
        const data = req.body;
        await saveMeetup(data);
        res.status(201).json({message: 'Meetup updated'});

    }
};

const saveMeetup = async (meetup) => {
    const uri = "mongodb+srv://admin:admin@cluster0.orcgf.mongodb.net/meetups?retryWrites=true&w=majority";
    const client = await new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }).connect();
    const meetupsCollection = client.db().collection("meetups");
    // perform actions on the collection object
    const result = await meetupsCollection.insertOne(meetup);
    console.log(result);
    client.close();
    return result;

}

export default handler;