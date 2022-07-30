import MeetupList from '../Components/meetups/MeetupList'
import { useState, useEffect } from 'react';
const Dummy_Data= [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://cdn.black-clover.org/file/sugois/solo-leveling/Chapter-1/1.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://cdn.black-clover.org/file/sugois/solo-leveling/Chapter-1/2.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];

 function AllMeetups() {

const [isLoading, setIsLoading] = useState(true);
const [loadedMeetups, setLoadedMeetups] = useState([]);

var axios = require('axios');

var accountId = '004c0ebdf6106b70000000002';
var applicationKey = 'K004cZYl6knnq3BrvFB3qzU8Wg7qHEk';
var credentials;

axios.post(
`https://s3.us-west-004.backblazeb2.com/Chapter1`,
{},
{
    headers: { Authorization: 'Basic' + accountId + ':' + applicationKey }
})
.then(function (response) {
    var data = response.data
    credentials = {
        accountId: accountId,
        applicationKey: applicationKey,
        apiUrl: data.apiUrl,
        authorizationToken: data.authorizationToken,
        downloadUrl: data.downloadUrl,
        recommendedPartSize: data.recommendedPartSize
    }
    console.log(credentials);
})
.catch(function (err) {
    console.log(err);  // an error occurred
});


///set effect
/*useEffect(() => {
  setIsLoading(true);
  fetch(
    url
  )
    .then((response) => {
      console.log(response)
      return response.json();
    })
    .then((data) => {
      const meetups = [];

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        };

        meetups.push(meetup);
      }

      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
}, []); */

    return ( 
        <section>
      <h1>All Meetups</h1>
     
        </section>
        
     );
}
 
export default AllMeetups;