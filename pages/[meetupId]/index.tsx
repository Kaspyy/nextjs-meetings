import { GetStaticPropsResult } from 'next';
import MeetupDetail from '../../components/meetups/MeetupDetail';
import Meetup from '../../models/meetup';
import { dbConnect, dbDisconnect } from '../../lib/database';
import { ObjectId, WithId } from 'mongodb';

function MeetupDetails(props: { meetup: WithId<Document> }) {
  return (
    <MeetupDetail
      image={props.meetup.image}
      title={props.meetup.title}
      address={props.meetup.address}
      description={props.meetup.description}
    />
  );
}

export async function getStaticPaths() {
  const client = await dbConnect();

  const db = client.db('meetups');

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection
    .find({}, { projection: { _id: 1 } })
    .toArray();

  dbDisconnect(client);

  return {
    paths: meetups.map(meetup => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context: {
  params: { meetupId: string };
}): Promise<GetStaticPropsResult<{ meetup: Meetup }>> {
  const meetupId = context.params.meetupId;

  const client = await dbConnect();

  const db = client.db('meetups');

  const meetupsCollection = db.collection('meetups');

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  return {
    props: {
      meetup: {
        title: selectedMeetup!.title,
        address: selectedMeetup!.address,
        image: selectedMeetup!.image,
        id: selectedMeetup!._id.toString(),
        description: selectedMeetup!.description,
      },
    },
    revalidate: 1,
  };
}

export default MeetupDetails;
