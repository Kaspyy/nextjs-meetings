import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import Meetup from '../../models/meetup';

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData: Meetup) {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(enteredMeetupData),
    });

    const data = await response.json();

    router.push('/');
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
