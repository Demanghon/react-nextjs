import { ObjectId } from "bson";
import { MongoClient } from "mongodb";

const handler = async (req, res) => {
    console.log("get meetup with id " + req.query.meetupId);
    if (req.method === "GET") {
        const meetups = await getMeetup(req.query.meetupId);
        const json = JSON.stringify(meetups);
        res.status(200).json(JSON.stringify(meetups));
    }
};

const getMeetup = async (meetupId) => {
    const uri = "mongodb+srv://admin:admin@cluster0.orcgf.mongodb.net/meetups?retryWrites=true&w=majority";
    const client = await new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }).connect();
    const meetupsCollection = client.db().collection("meetups");
    // perform actions on the collection object
    
    const result = await meetupsCollection.findOne({_id: ObjectId(meetupId)})
    client.close();
    return result;
};

export default handler;
