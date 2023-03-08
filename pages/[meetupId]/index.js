import MeetupDetail from "@/components/meetups/MeetupDetail";
import { Fragment } from "react";
import Head from "next/head";
import dbConnect from "@/lib/dbConnect";
import Meetup from "@/models/Meetup"

function MeetupDetails({ meetupData }) {
  return (
    <Fragment>
      <Head>
        <title>{meetupData.title}</title>
        <meta
          name="description"
          content="Browse a huge list of react meetups"
        />
      </Head>
      <MeetupDetail
        image={meetupData.currentMeetup.image}
        title={meetupData.currentMeetup.title}
        address={meetupData.currentMeetup.address}
        description={meetupData.currentMeetup.description}
      />
    </Fragment>
  );
}

export async function getServerSideProps({params}) {

  await dbConnect()
  const meetupId = params.meetupId;

  const currentMeetup = await Meetup.findById(meetupId).lean()

  currentMeetup._id = currentMeetup._id.toString()

  return {
    props: {
      meetupData: { currentMeetup },
    },
  };
}

export default MeetupDetails;
