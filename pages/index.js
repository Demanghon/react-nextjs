import MeetupList from "../components/meetups/MeetupList";

const Home = (props) => {
    return <MeetupList meetups={props.meetups} />;
};

// export const getStaticProps = async () => {
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS,
//         },
//         revalidate: 10 // number of seconds
//     }
// }

export const getStaticProps = async (context) => {
    console.log("home page generation");
    const response = await fetch("http://localhost:3000/api/meetups");
    const meetups = await response.json();
    //fetch data from an api
    return {
        props: {
            meetups: meetups,
        },
        revalidate: 60
    };
};

export default Home;
