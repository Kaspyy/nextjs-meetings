import { GetStaticPropsResult } from 'next';
import MeetupDetail from '../../components/meetups/MeetupDetail';
import Meetup from '../../models/meetup';

function MeetupDetails(props: { meetup: Meetup }) {
  return (
    <MeetupDetail
      image='
      https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg'
      title='Meetup in Paris'
      address='18 Rue du Bac, Paris'
      description='Scheduled for July 4th, 2022'
    />
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context: {
  params: { meetupId: string };
}): Promise<GetStaticPropsResult<{ meetup: Meetup }>> {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetup: {
        id: meetupId,
        title: 'Meetup in Paris',
        address: '18 Rue du Bac, Paris',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',
        description: 'First meetup in Paris',
      },
    },
    revalidate: 1,
  };
}

export default MeetupDetails;
