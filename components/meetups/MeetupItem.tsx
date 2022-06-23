import { useRouter } from 'next/router';
import Image from 'next/image';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import Meetup from '../../models/meetup';

function MeetupItem(props: { meetup: Meetup }) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push('/' + props.meetup.id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image
            loader={() => props.meetup.image}
            src={props.meetup.image}
            alt={props.meetup.title}
            width='100%'
            height='50%'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className={classes.content}>
          <h3>{props.meetup.title}</h3>
          <address>{props.meetup.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
