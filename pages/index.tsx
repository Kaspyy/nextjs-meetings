import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';
import Meetup from '../models/meetup';
import { dbConnect } from '../lib/database';

function HomePage(props: { meetups: Meetup[] }) {
  return (
    <>
      <Head>
        <title>Next Meetups</title>
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

export async function getStaticProps() {
  const client = await dbConnect();

  const db = client.db('meetups');

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
