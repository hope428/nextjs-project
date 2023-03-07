import MeetupDetail from "@/components/meetups/MeetupDetail";
import { MongoClient } from "mongodb";

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image={props.image}
      title={props.title}
      address={props.address}
      description={props.description}
    />
  );
}

export async function getStaticPaths() {

    const client = await MongoClient.connect(process.env.MONGODB_URI)
    const meetupCollection = client.db().collections('meetups')

    const meetups = await meetupCollection.find({}, {_id: 1}).toArray()
    client.close()

  return {
    fallback: true,
    paths: meetups.map(meetup => ({params: {meetupId: meetup._id.toString()}}))
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(process.env.MONGODB_URI)

  const meetupCollection = client.db().collections('meetups')
  const currentMeetup = await meetupCollection.findOne({_id: meetupId})

  return {
    props: {
      meetupData: currentMeetup
    },
  };
}

export default MeetupDetails;
