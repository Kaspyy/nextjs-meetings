import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import Meetup from '../../models/meetup';

// enter your mongoDB username and password here
const username = '';
const password = '';

async function handler(req: NextApiRequest, res: NextApiResponse<Meetup>) {
  if (req.method === 'POST') {
    const data = req.body;

    const { title, address, description, image } = data;

    const client = await MongoClient.connect(
      `mongodb+srv://${username}:${password}@cluster0.xrvsaqk.mongodb.net/?retryWrites=true&w=majority`
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = meetupsCollection.insertOne(data);

    client.close();
  }
}

export default handler;
