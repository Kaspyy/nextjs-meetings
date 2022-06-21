import { useRouter } from 'next/router';
import Image from 'next/image';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props: {
  id: string;
  title: string;
  address: string;
  image: string;
}) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push('/' + props.id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image
            loader={() => props.image}
            src={props.image}
            alt={props.title}
            width='100%'
            height='50%'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
