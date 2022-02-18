import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const router = useRouter();

  //sends request to our api route
  //our method specifies what our request is
  //our body is a javascript object that carries the data we want to store
  // our headers make it clear that we're sending json data
  const addMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    //the response we get from our api route on the data we sent
    const data = await response.json();

    router.push('/');
  };

  return (
    <Fragment>
      <title>Add a New Meetup</title>
      <meta name='description' content="Add your own meetups and create amazing networking opportunities!" />
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  )
};

export default NewMeetupPage;
