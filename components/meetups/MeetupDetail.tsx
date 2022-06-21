import Image from 'next/image';
import classes from './MeetupDetail.module.css';

function MeetupDetail(props: {
  title: string;
  image: string;
  address: string;
  description: string;
}) {
  return (
    <section className={classes.detail}>
      <Image
        src={props.image}
        alt={props.title}
        width='100%'
        height='50%'
        layout='responsive'
        objectFit='cover'
      />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}

export default MeetupDetail;
