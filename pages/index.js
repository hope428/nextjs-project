import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from "mongodb";


function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  //fetch data from an api or database

  const client = await MongoClient.connect(process.env.MONGODB_URI)

  const db = client.db()
  const meetupCollections = db.collection('meetups')

  const result = await meetupCollections.find().toArray()

  return {
    props: {
      meetups: result.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      })),
    },
    revalidate: 10
  };
}



export default HomePage;
