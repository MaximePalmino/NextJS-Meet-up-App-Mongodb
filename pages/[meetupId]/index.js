import MeetupDetail from "../../components/meetups/MeetupDetail"


const MeetupDetails = (props) => {
    

    return(
        <>
            <MeetupDetail img='' title="first meet up" adress="adress" description="description" />
        </>
    )
}

export async function getStaticPaths() {

    return {
    fallback: false,
      paths: [
        {
          params: {
            meetupId: 'm1'
          },
          params: {
            meetupId: 'm2'
          },
          params: {
            meetupId: 'm1'
          },
        },
      ]
    };
  }
export async function getStaticProps(context) {
// Fetch data for a single meetup

const meetupId = context.params.meetupId
console.log(meetupId)

return {
    props: {
        meetupData: {
            img: '',
            id: meetupId,
            title: 'first meet up',
            adress: 'adress',
            description: 'description'

        }
    }
}
}

export default MeetupDetails