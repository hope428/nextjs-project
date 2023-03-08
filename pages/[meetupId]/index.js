import MeetupDetail from "@/components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

function MeetupDetails({meetupData}) {
  return (
    <MeetupDetail
      image={meetupData.image}
      title={meetupData.title}
      address={meetupData.address}
      description={meetupData.description}
    />
  );
}

export async function getStaticPaths() {

    const client = await MongoClient.connect(process.env.MONGODB_URI)
    const db = client.db()
    const meetupCollection = db.collection('meetups')

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
  const db = client.db()

  const meetupCollection = db.collection('meetups')
  const currentMeetup = await meetupCollection.findOne({_id: new ObjectId(meetupId)})

  return {
    props: {
      meetupData: {
        id: currentMeetup._id.toString(),
        title: currentMeetup.title,
        address: currentMeetup.address,
        image: currentMeetup.image,
        description: currentMeetup.description
      }
    },
  };
}

export default MeetupDetails;
