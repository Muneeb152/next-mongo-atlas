import { Fragment } from "react";
// import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        {/* <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description}></meta> */}
      </Head>
      <h1>Hello Id</h1>
      {/* <h1>{props.meetupData.image}</h1>
      <h1>{props.meetupData.title}</h1>
      <h1>{props.meetupData.address}</h1>
      <h1>{props.meetupData.description}</h1> */}
    </Fragment>
  );
}
// export async function getStaticPaths() {
//   const client = await MongoClient.connect(
//     "mongodb+srv://mnbch52:bcNAF4KhWSi67P47@cluster0.r5colis.mongodb.net/meetups?retryWrites=true&w=majority"
//   );
//   const db = client.db();
//   const meetupsCollection = db.collection("meetups");
//   const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
//   console.log("Meetups from database are:", meetups);
//   client.close();
//   return {
//     fallback: false,
//     paths: meetups.map((meetup) => ({
//       params: { mmetupId: meetup._id.toString() },
//     })),
//   };
// }

// export async function getStaticProps() {
//   const meetupId = context.params.meetupId;
//   const client = await MongoClient.connect(
//     "mongodb+srv://mnbch52:bcNAF4KhWSi67P47@cluster0.r5colis.mongodb.net/meetups?retryWrites=true&w=majority"
//   );
//   const db = client.db();
//   const meetupsCollection = db.collection("meetups");
//   const selectedMeetup = meetupsCollection.findOne({ _id: ObjectId(meetupId) });
//   console.log(selectedMeetup)
//   client.close();
//   return {
//     props: {
//       meetupData: {
//         id:selectedMeetup._id.toString(),
//         title:selectedMeetup.title,
//         address:selectedMeetup.address,
//         image:selectedMeetup.image,
//         description:selectedMeetup.description,

//       },
//     },
//   };
// }

export default MeetupDetails;
