import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import MeetupData from '../../models/meetupdata';

function NewMeetupPage() {
  function addMeetupHandler(enteredMeetupData: MeetupData) {
    console.log(enteredMeetupData);
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
