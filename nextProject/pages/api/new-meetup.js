import { MongoClient } from 'mongodb';

// Only POST requests from the new-meetup page will trigger handler

const handler = async (req, res) => {
  if (req.method === 'POST') {

    // the data that we retrieve from the post request that we want to store
    const data = req.body;

    // opens access to your mongo db
    const client = await MongoClient.connect('mongodb+srv://cguizar525:Pokemon10@cluster0.bthpq.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

     // creates a collection of stored data.
     const meetupsCollection = db.collection('meetups');

     const result = await meetupsCollection.insertOne(data);

     console.log(result);

     //closes access to your mongo db
     client.close()

     //sets an http status code of the response thats returned;
     // 201 means it was saved successfully;
     res.status(201).json({message: 'Meetup inserted!'})
  }
}

export default handler;
