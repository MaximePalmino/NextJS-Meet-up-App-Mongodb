import MeetupList from '../components/meetups/MeetupList'
import Layout from "../components/layout/Layout"


const HomePage = () => {

    const DUMMY_MEETUPS = [
        {
          id: 'm1',
          title: 'My first title',
          image: 'https://images.unsplash.com/photo-1648571113523-d0c7ca902bca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          adresse:' An addresse '
        },
        {
          id: 'm2',
          title: 'My second title',
          image: 'https://images.unsplash.com/photo-1648571113523-d0c7ca902bca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          adresse:' An addresse 02'
        }
      ]

      
    return (
        <>
        <MeetupList meetups={DUMMY_MEETUPS} />
        </>
    )
}

export default HomePage