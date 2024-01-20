// pages/index.js
"use client"
import { MongoClient } from 'mongodb';

function HomePage({ meetups }) {
  return <div>Welcome to Next.jss!</div>;
}

export async function getStaticProps() {
  try {
    const client = await MongoClient.connect('mongodb+srv://mnbch52:bcNAF4KhWSi67P47@cluster0.r5colis.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    console.log("Meetups from database are:", meetups);
    client.close();

    return {
      props: {
        meetups: meetups.map(meetup => ({
          title: meetup.title,
          address: meetup.address,
          image: meetup.image,
          id: meetup._id.toString(),
        })),
      },
      revalidate: 1,
    };
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return {
      props: {
        meetups: [],
      },
      revalidate: 1,
    };
  }
}

export default HomePage;
