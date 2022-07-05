import { NextApiRequest, NextApiResponse } from 'next';
import Meetup from '../../models/meetup';
import { dbConnect, dbDisconnect } from '../../lib/database';

async function handler(req: NextApiRequest, res: NextApiResponse<Meetup>) {
  if (req.method === 'POST') {
    const data = req.body;

    const { title, address, description, image } = data;

    const client = await dbConnect();

    const db = client.db('meetups');

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    dbDisconnect(client);
  }
}

export default handler;
