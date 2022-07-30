import MeetupItem from "./MeetupItem";
import "./MeetupList.css";
const MeetupList = (props) => {
  return (
    <div>
      {props.meetups.map((meetup) => (
        <MeetupItem key={meetup.id} id={meetup.id} image={meetup.image} />
      ))}
    </div>
  );
};

export default MeetupList;
