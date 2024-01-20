import React, { useEffect, useRef, useState, Fragment } from "react";
import { useRouter } from "next/router";
import { MongoClient } from "mongodb";
function NewMeetupPage() {
  const router = useRouter();
  const meetupData = {
    title: "Hello",
    image: "dummy",
    address: "Pak",
    description: "desc",
  };

  async function addMeetupHandler(meetupData) {
    const response = await fetch("api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
  }

  async function readMeetupHandler(meetupData) {
    const client = await MongoClient.connect(
      "mongodb+srv://mnbch52:bcNAF4KhWSi67P47@cluster0.r5colis.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const meetups = await meetupsCollection.find().toArray();
    console.log("Meetups from database are:", meetups);
    client.close();
  }

  useEffect(() => {
    addMeetupHandler();
    readMeetupHandler();
  }, []);
  return (
    <Fragment>
      <h1>New Meetup Page</h1>
    </Fragment>
  );
}

export default NewMeetupPage;
