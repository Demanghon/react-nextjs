import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetailPage = (props) => {
    return <MeetupDetail {...props.meetup} />;
};

export const getStaticProps = async (context) => {
    console.log("generation page");
    const response = await fetch("http://localhost:3000/api/meetups/" + context.params.meetupId);
    const meetup = await response.json();
    //fetch data from an api
    return {
        props: {
            meetup: meetup,
        },
        revalidate: false
    };
};

export const getStaticPaths = () => {
    return {
        fallback: false, //true => server side generation if param is not defined
        paths: [{params: {meetupId: "61dedaef79b7ebc21a91e708"}}]
    };
};

export default MeetupDetailPage;
