import MeetupList from '../components/meetups/MeetupList';
import Meetup from '../models/meetup';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'Meetup in Paris',
    address: '	18 Rue du Bac, Paris',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',
    description: 'First meetup in Paris',
  },
  {
    id: 'm2',
    title: 'Meetup in London',
    address: '10 Downing Street, London',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/99/London-BigBen_%2827038026452%29.jpg',
    description: 'First meetup in London',
  },
];

function HomePage(props: { meetups: Meetup[] }) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}

export default HomePage;
