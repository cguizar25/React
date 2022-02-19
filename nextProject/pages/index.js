import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name='description' content="Browse a huge list of highly actve React meetups!" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  )
}

// //Runs on the Server AFTER deployment, guaranteed to run after every request
// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;
//
//   //fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// };

//Runs DURING the build Process
export const getStaticProps = async () => {

  const client = await MongoClient.connect('mongodb+srv://cguizar525:Pokemon10@cluster0.bthpq.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup)=> ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      }))
    },
    revalidate: 1
  };
}

export default HomePage;
