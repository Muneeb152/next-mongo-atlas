
import React, { useEffect, useRef, useState, Fragment } from "react";
import { useRouter } from 'next/router';
function NewMeetupPage() {
   const router= useRouter();
    const meetupData = {
        title: "Hello",
        image: "dummy",
        address: "Pak",
        description: "desc"
    }

    async function addMeetupHandler(meetupData) {
        const response = await fetch('api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
        router.push('/')
    }
    useEffect(() => {
        addMeetupHandler();
    }, []);
    return (
        <Fragment>
            <h1>New Meetup Page</h1>
        </Fragment>
    )

}

export default NewMeetupPage;
