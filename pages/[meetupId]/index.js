import MeetupDetail from "../../components/meetups/MeetupDetail"
import { MongoClient, ObjectId} from 'mongodb'

const MeetupDetails = (props) => {

    return(
        <>
            <MeetupDetail img={props.meetupData.image} title={props.meetupData.title} adress={props.meetupData.address} description={props.meetupData.description} />
        </>
    )
}

export async function getStaticPaths() {

  const client = await MongoClient.connect('mongodb+srv://Maxime:6RN1OGFFw5mGPuTz@cluster0.wxoqi.mongodb.net/meetups?retryWrites=true&w=majority')
  const db = client.db()
  const meetupsCollection = db.collection('meetups')
  const meetups = await meetupsCollection.find({}, { _id: 1}).toArray() 
  client.close()

    return {
    fallback: false,
      paths: meetups.map((meetup) => ({
        params: {
          meetupId: meetup._id.toString()
        } 
      }))
    };
  }

export async function getStaticProps(context) {
// Fetch data for a single meetup

const meetupId = context.params.meetupId
const client = await MongoClient.connect('mongodb+srv://Maxime:6RN1OGFFw5mGPuTz@cluster0.wxoqi.mongodb.net/meetups?retryWrites=true&w=majority')
const db = client.db()
const meetupsCollection = db.collection('meetups')
const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId) })
console.log(selectedMeetup)
client.close()

return {
    props: {
        meetupData: {
          id: selectedMeetup._id.toString(),
          title: selectedMeetup.title,
          address: selectedMeetup.address,
          image: selectedMeetup.image,
          description: selectedMeetup.description
        }
    }
}
}

export default MeetupDetails