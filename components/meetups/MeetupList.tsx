import MeetupItem from './MeetupItem';
import Meetup from '../../models/meetup';
import classes from './MeetupList.module.css';

function MeetupList(props: { meetups: Meetup[] }) {
  return (
    <ul className={classes.list}>
      {props.meetups.map(meetup => (
        <MeetupItem key={meetup.id} meetup={meetup} />
      ))}
    </ul>
  );
}

export default MeetupList;
