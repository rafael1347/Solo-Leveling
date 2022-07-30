import MeetupList from '../Components/meetups/MeetupList'
import { Dummy_Data } from '../Data/DummyData';
const MangaDisplay = () => {
    return ( 
        <section>
      <h1>You are now reading Solo Leveling</h1>
      <MeetupList meetups={Dummy_Data} />
    </section>
        
     );
}
 
export default MangaDisplay;