import { MongoClient } from 'mongodb';
import credentials from '../credentials.json';

export async function dbConnect() {
  const username = credentials.username;
  const password = encodeURIComponent(credentials.password);

  const client = await MongoClient.connect(
    `mongodb+srv://${username}:${password}@cluster0.xrvsaqk.mongodb.net/?retryWrites=true&w=majority`
  );

  return client;
}

export async function dbDisconnect(client: MongoClient) {
  await client.close();
}
