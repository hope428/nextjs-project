import MeetupList from "@/components/meetups/MeetupList";
import Head from "next/head";
import { Fragment } from "react";
import dbConnect from "@/lib/dbConnect";
import Meetup from "@/models/Meetup"

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse a huge list of react meetups" />
      </Head>
      <MeetupList meetups={props.meetups.meetups} />;
    </Fragment>
  );
}

export async function getServerSideProps() {
  //fetch data from an api or database

  await dbConnect()

  const result = await Meetup.find({})
  const meetups = result.map((doc) => {
    const meetup = doc.toObject()
    meetup._id = meetup._id.toString()
    return meetup
  })

  return {
    props: {
      meetups: {meetups}
    }
  };
}

export default HomePage;
