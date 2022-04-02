import MeetupList from '../components/meetups/MeetupList'
import Layout from "../components/layout/Layout"
import { MongoClient } from 'mongodb'

const HomePage = (props) => {

      
    return (
        <>
        <MeetupList meetups={props.meetups} />
        </>
    )
}


export async function getStaticProps() {

  const client = await MongoClient.connect('mongodb+srv://Maxime:6RN1OGFFw5mGPuTz@cluster0.wxoqi.mongodb.net/meetups?retryWrites=true&w=majority')

  const db = client.db()
  const meetupsCollection = db.collection('meetups')
  const meetups = await meetupsCollection.find().toArray()
  client.close()

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
        image: meetup.image,
        id: meetup._id.toString()
        
      }))
    },
    revalidate: 5
  }

}


export default HomePage