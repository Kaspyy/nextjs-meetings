import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';
import Meetup from '../../models/meetup';

function NewMeetupForm(props: { onAddMeetup: (meetup: Meetup) => void }) {
  const titleInputRef: React.RefObject<HTMLInputElement> = useRef(null);
  const imageInputRef: React.RefObject<HTMLInputElement> = useRef(null);
  const addressInputRef: React.RefObject<HTMLInputElement> = useRef(null);
  const descriptionInputRef: React.RefObject<HTMLTextAreaElement> =
    useRef(null);

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current!.value;
    const enteredImage = imageInputRef.current!.value;
    const enteredAddress = addressInputRef.current!.value;
    const enteredDescription = descriptionInputRef.current!.value;

    const meetupData = {
      title: enteredTitle,
      address: enteredAddress,
      image: enteredImage,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows={5}
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
