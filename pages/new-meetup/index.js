import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const NewMeetup = () => {
    const router = useRouter();
    const addMeetupHandler = async (meetupData) => {
        console.log("add meetup")
        const response = await fetch("/api/new-meetup", {
            method: "POST",
            body: JSON.stringify(meetupData),
            headers: {'Content-Type': 'application/json'}
        });
        const data = await response.json();
        router.push("/");
    }
    return <NewMeetupForm onAddMeetup={addMeetupHandler}/>;
}

export default NewMeetup;