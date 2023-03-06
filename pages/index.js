import Layout from "@/components/layout/Layout";
import MeetupList from "@/components/meetups/MeetupList";
import { Fragment } from "react";

function HomePage() {

    const DUMMY_MEETUPS = [
        {
            id: 'm1',
            title: 'A First Meetup',
            image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
            address: 'Rothenburg ob der Tauber, Germany',
            description: 'The very first meetup'
        },
        {
            id: 'm2',
            title: 'A Second Meetup',
            image: 'https://images.unsplash.com/photo-1634627219651-70f2c49a5bcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            address: 'Berlin, Germany',
            description: 'The second meetup'
        },
        {
            id: 'm3',
            title: 'A Third Meetup',
            image: 'https://images.unsplash.com/photo-1563876141153-d6d4b0795668?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
            address: 'Wolfenbüttel, Germany',
            description: 'The third meetup'
        }
    ]

  return (
    <Fragment>
      <Layout />
      <MeetupList meetups={DUMMY_MEETUPS}/>
    </Fragment>
  );
}

export default HomePage;
