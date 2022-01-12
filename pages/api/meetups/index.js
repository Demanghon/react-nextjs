import { MongoClient } from "mongodb";


const handler = async (req, res) => {
    console.log("get meetups");
    if(req.method === 'GET'){
        const meetups = await getMeetups();
        const json = JSON.stringify(meetups);
        res.status(200).json(JSON.stringify(meetups));
    }
};

const getMeetups = async () => {
    const uri = "mongodb+srv://admin:admin@cluster0.orcgf.mongodb.net/meetups?retryWrites=true&w=majority";
    const client = await new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }).connect();
    const meetupsCollection = client.db().collection("meetups");
    // perform actions on the collection object
    const result = await meetupsCollection.find().toArray();
    client.close();
    return result;

}

export default handler;