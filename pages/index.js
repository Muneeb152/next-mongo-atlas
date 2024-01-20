// pages/index.js
"use client";
import Head from "next/head";
import { MongoClient } from "mongodb";
import { Fragment } from "react";

function HomePage({ meetups }) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse ahuge list of highly active React Meetups"></meta>
      </Head>
      <div>Welcome to Next.jss!</div>
    </Fragment>
  );
}

export async function getStaticProps() {
  try {
    const client = await MongoClient.connect(
      "mongodb+srv://mnbch52:bcNAF4KhWSi67P47@cluster0.r5colis.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const meetups = await meetupsCollection.find().toArray();
    console.log("Meetups from database are:", meetups);
    client.close();

    return {
      props: {
        meetups: meetups.map((meetup) => ({
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
