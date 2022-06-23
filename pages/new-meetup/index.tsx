import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import Meetup from '../../models/meetup';

function NewMeetupPage() {
  function addMeetupHandler(enteredMeetupData: Meetup) {
    // TODO: Add meetup to the database
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
